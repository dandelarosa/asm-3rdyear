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
    for (var i = 0; i < 4; i++) {
      this.playerBullets.push(new PlayerBullet(0,0));
    }
    this.canShoot = true;

    this.enemies = [
      new EnemyShip(96, 100),
      new EnemyShip(160, 100),
      new EnemyShip(224, 100),
      new EnemyShip(288, 100),
      new EnemyShip(352, 100), 
    ];

    this.objectCollider = new ObjectCollider();

    this.paused = false;
    this.canPause = false;
    this.canResume = false;
  };
  this.init();

  this.update = function() {

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

    // Move Objects

    // Move player ship
    if (this.playerShip) {
      this.playerShip.oldX = this.playerShip.x;
      this.playerShip.oldY = this.playerShip.y;

      this.playerShip.y += this.cameraSpeed;

      if (leftPressed) {
        this.playerShip.x -= 5;
      }
      else if (upPressed) {
        this.playerShip.y -= 5;
      }
      else if (rightPressed) {
        this.playerShip.x += 5;
      }
      else if (downPressed) {
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
  }

  this.draw = function() {
    canvasContext.save();

    canvasContext.translate(0, -this.cameraY);

    canvasContext.drawImage(oceanImage, 0, this.background1Y);
    canvasContext.drawImage(oceanImage, 0, this.background2Y);

    for (var i = 0; i < this.playerBullets.length; i++) {
      var playerBullet = this.playerBullets[i];
      playerBullet.draw();
    }

    for (var i = 0; i < this.enemies.length; i++) {
      var enemy = this.enemies[i];
      enemy.draw();
    }

    this.playerShip && this.playerShip.draw();

    canvasContext.restore();

    if (this.paused) {
      canvasContext.font = '30px Times';
      drawText('Paused', GAME_WIDTH/2, GAME_HEIGHT/2, 'black', 'center', 'middle');
    }
  }
}
