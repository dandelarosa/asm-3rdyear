function ArcadeShmupScene(tilemap) {
  this.init = function() {
    this.cameraY = 0;
    this.cameraSpeed = -5; // Reminder: up is -y

    // Simulate scrolling by displaying multiple versions of the background
    this.background1Y = 0;
    this.background2Y = -GAME_HEIGHT;

    this.playerShip = new PlayerShip();
    this.playerShip.x = 224;
    this.playerShip.y = 420;

    this.playerBullets = [];
    for (var i = 0; i < 10; i++) {
      this.playerBullets.push(new PlayerBullet(0,0));
    }
    this.canShoot = true;

    this.enemies = [];
    this.enemyBullets = [];
    this.enemyScheduler = new EnemyScheduler();

    this.boss = null;
    this.youWin = false;

    this.objectCollider = new ObjectCollider();

    this.paused = false;
    this.canPause = false;
    this.canResume = false;

    this.deathTimer = 60;
    this.winTimer = 30;
  };
  this.init();

  this.update = function() {
    if (this.youWin) {
      if (enterPressed) {
        goToMenu();
      }
      return;
    }

    // Handle Pause

    if (this.paused) {
      if (enterPressed && this.canResume) {
        this.paused = false;
        this.canPause = false;
      }
      else if (!enterPressed) {
        this.canResume = true;
      }
      return;
    }
    else {
      if (enterPressed && this.canPause) {
        this.paused = true;
        this.canResume = false;
      }
      else if (!enterPressed) {
        this.canPause = true;
      }
    }

    // Move Camera

    this.cameraY += this.cameraSpeed;

    if (this.background1Y > this.cameraY + GAME_HEIGHT) {
      this.background1Y = this.background2Y - GAME_HEIGHT;
    }
    if (this.background2Y > this.cameraY + GAME_HEIGHT) {
      this.background2Y = this.background1Y - GAME_HEIGHT;
    }

    // Spawn New Enemies

    var newEnemies = this.enemyScheduler.getEnemiesForThisFrame();
    for (var i = 0; i < newEnemies.length; i++) {
      var newEnemy = newEnemies[i];
      newEnemy.y += this.cameraY;
      this.enemies.push(newEnemy);
    }
    this.enemyScheduler.tick();

    // Spawn Boss

    // Eventually there will be a timer for spawning the boss
    if (this.boss === null) {
      this.boss = new Boss(40, -BOSS_HEIGHT);
      this.boss.y += this.cameraY;
    }

    // Move Objects

    // Move player ship
    if (this.playerShip) {
      this.playerShip.oldX = this.playerShip.x;
      this.playerShip.oldY = this.playerShip.y;

      this.playerShip.y += this.cameraSpeed;

      if (leftPressed) {
        this.playerShip.x -= 8;
      }
      if (upPressed) {
        this.playerShip.y -= 5;
      }
      if (rightPressed) {
        this.playerShip.x += 8;
      }
      if (downPressed) {
        this.playerShip.y += 5;
      }

      if (this.playerShip.x < 0) {
        this.playerShip.x = 0;
      }
      if (this.playerShip.x + this.playerShip.width > GAME_WIDTH) {
        this.playerShip.x = GAME_WIDTH - this.playerShip.width;
      }
      if (this.playerShip.y < this.cameraY) {
        this.playerShip.y = this.cameraY;
      }
      if (this.playerShip.y + this.playerShip.height > this.cameraY + GAME_HEIGHT) {
        this.playerShip.y = this.cameraY + GAME_HEIGHT - this.playerShip.height;
      }

      if (spacePressed) {
        if (this.canShoot) {
          for (var i = 0; i < this.playerBullets.length; i++) {
            var playerBullet = this.playerBullets[i];
            if (playerBullet.active === false) {
              playerBullet.x = this.playerShip.x + (this.playerShip.width / 2) - (playerBullet.width / 2);
              playerBullet.y = this.playerShip.y;
              playerBullet.active = true;
              break;
            }
          }
          this.canShoot = false;
        }
      }
      else {
        this.canShoot = true;
      }
    }

    // Move player bullets
    for (var i = 0; i < this.playerBullets.length; i++) {
      var playerBullet = this.playerBullets[i];
      playerBullet.update();
      if (playerBullet.active) {
        playerBullet.y += this.cameraSpeed;
        if (playerBullet.y < this.cameraY) {
          playerBullet.active = false;
        }
      }
    }

    // Move enemies
    for (var i = 0; i < this.enemies.length; i++) {
      var enemy = this.enemies[i];
      enemy.y += this.cameraSpeed;
      enemy.update();
    }

    // Move boss
    if (this.boss) {
      this.boss.y += this.cameraSpeed;
      this.boss.update(this.playerShip);
      var newEnemyBullets = this.boss.getNewEnemyBullets(this.playerShip);
      if (newEnemyBullets.length > 0) {
        this.enemyBullets = this.enemyBullets.concat(newEnemyBullets);
      }
    }

    // Move enemy bullets
    for (var i = 0; i < this.enemyBullets.length; i++) {
      var enemyBullet = this.enemyBullets[i];
      enemyBullet.y += this.cameraSpeed;
      enemyBullet.update();
    }

    // Detect Collisions

    // Detect collisions between player bullets and enemies
    for (var i = 0; i < this.playerBullets.length; i++) {
      var playerBullet = this.playerBullets[i];
      if (playerBullet.active === false) {
        continue;
      }
      for (var j = 0; j < this.enemies.length; j++) {
        var enemy = this.enemies[j];
        if (enemy.alive === false) {
          continue;
        }
        if (this.objectCollider.objectsCollide(playerBullet, enemy)) {
          playerBullet.active = false;
          enemy.alive = false;
          break;
        }
      }
    }

    // Detect collisions between player bullets and boss
    if (this.boss) {
      this.boss.collideWithBullets(this.playerBullets);
    }

    // Detect collisions between player ship and enemies
    if (this.playerShip) {
      for (var j = 0; j < this.enemies.length; j++) {
        var enemy = this.enemies[j];
        if (enemy.alive === false) {
          continue;
        }
        if (this.objectCollider.objectsCollide(this.playerShip, enemy)) {
          this.playerShip = null;
          enemy.alive = false;
          break;
        }
      }
    }

    // Detect collisions between player ship and enemy bullets
    if (this.playerShip) {
      for (var j = 0; j < this.enemyBullets.length; j++) {
        var enemyBullet = this.enemyBullets[j];
        if (enemyBullet.active === false) {
          continue;
        }
        if (this.objectCollider.objectsCollide(this.playerShip, enemyBullet)) {
          this.playerShip = null;
          enemyBullet.active = false;
          break;
        }
      }
    }

    // Just restart the level if the player died
    if (!this.playerShip) {
      if (this.deathTimer === 0) {
        restartGame();
      }
      else {
        this.deathTimer--;
      }
    }

    if (this.boss && this.boss.alive === false) {
      if (this.winTimer === 0) {
        this.youWin = true;
      }
      else {
        this.winTimer--;
      }
    }
  }

  this.draw = function() {
    canvasContext.save();

    canvasContext.translate(0, -this.cameraY);

    canvasContext.drawImage(oceanImage, 0, this.background1Y);
    canvasContext.drawImage(oceanImage, 0, this.background2Y);

    this.boss && this.boss.draw();

    for (var i = 0; i < this.playerBullets.length; i++) {
      var playerBullet = this.playerBullets[i];
      playerBullet.draw();
    }

    for (var i = 0; i < this.enemies.length; i++) {
      var enemy = this.enemies[i];
      enemy.draw();
    }

    for (var i = 0; i < this.enemyBullets.length; i++) {
      var enemyBullet = this.enemyBullets[i];
      enemyBullet.draw();
    }

    this.playerShip && this.playerShip.draw();

    canvasContext.restore();

    if (this.paused) {
      canvasContext.font = '30px Times';
      drawText('Paused', GAME_WIDTH/2, GAME_HEIGHT/2, 'black', 'center', 'middle');
    }
    else if (this.youWin) {
      canvasContext.font = '30px Times';
      drawText('You Win!', GAME_WIDTH/2, GAME_HEIGHT/2 - 30, 'black', 'center', 'middle');
      canvasContext.font = '20px Times';
      drawText('Press Enter to Return to Menu', GAME_WIDTH/2, GAME_HEIGHT/2 + 10, 'black', 'center', 'middle');
    }
  }
}
