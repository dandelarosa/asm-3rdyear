const BOSS_WIDTH = 400;
const BOSS_HEIGHT = 200;

const BOSS_TURRET_WIDTH = 32;
const BOSS_TURRET_HEIGHT = 32;

const BOSS_TRAVEL_SPEED = 4;
const BOSS_MAX_DISTANCE_TRAVELED = 256;

const BOSS_FIRE_TIMER_MAX = 60;

function Boss(x, y) {
  this.init = function() {
    this.x = x;
    this.y = y;
    this.width = BOSS_WIDTH;
    this.height = BOSS_HEIGHT;
    this.alive = true;
    this.distanceTraveled = 0;
    this.health = 50;
    this.hurt = false;

    this.turrets = [
      { x: 48, y: 48, angle: 0, health: 100, hurt: false },
      { x: 48, y: 152, angle: 0, health: 100, hurt: false },
      { x: 352, y: 48, angle: 0, health: 100, hurt: false },
      { x: 352, y: 152, angle: 0, health: 100, hurt: false },
    ];
    this.numTurretsAlive = this.turrets.length;
    this.fireTimer = BOSS_FIRE_TIMER_MAX;
  };
  this.init();

  this.update = function(ship) {
    if (this.distanceTraveled < BOSS_MAX_DISTANCE_TRAVELED) {
      this.y += BOSS_TRAVEL_SPEED;
      this.distanceTraveled += BOSS_TRAVEL_SPEED;
    }

    if (this.alive) {
      for (var i = 0; i < this.turrets.length; i++) {
        var turret = this.turrets[i];

        if (ship) {
          var turretX = this.x + turret.x;
          var turretY = this.y + turret.y;
          var shipX = ship.x + ship.width / 2;
          var shipY = ship.y + ship.height / 2;
          turret.angle = Math.atan2(shipY - turretY, shipX - turretX);
        }
        
        if (turret.hurt === true) {
          if (turret.hurtTimer === 0) {
            turret.hurt = false;
          }
          else {
            turret.hurtTimer--;
          }
        }
      }
      if (this.hurt === true) {
        if (this.hurtTimer === 0) {
          this.hurt = false;
        }
        else {
          this.hurtTimer--;
        }
      }
    }
  };

  this.getNewEnemyBullets = function(ship) {
    var result = [];
    if (this.alive && ship) {
      // Fire bullets once boss is ready
      if (this.distanceTraveled >= BOSS_MAX_DISTANCE_TRAVELED) {
        if (this.fireTimer === 0) {
          for (var i = 0; i < this.turrets.length; i++) {
            var turret = this.turrets[i];
            var turretX = this.x + turret.x;
            var turretY = this.y + turret.y;
            var shipX = ship.x + ship.width / 2;
            var shipY = ship.y + ship.height / 2;
            result.push(new EnemyBullet(turretX, turretY, shipX, shipY));
          }
          this.fireTimer = BOSS_FIRE_TIMER_MAX;
        }
        // Getters shouldn't alter state but we'll let this fly for now
        this.fireTimer--;
      }
    }
    return result;
  }

  this.collideWithBullets = function(bullets) {
    // Player can't damage boss until all turrets are destroyed
    if (this.numTurretsAlive > 0) {
      for (var i = 0; i < bullets.length; i++) {
        var bullet = bullets[i];
        if (bullet.active === true) {
          for (var j = 0; j < this.turrets.length; j++) {
            var turret = this.turrets[j];
            var x1 = this.x + turret.x - BOSS_TURRET_WIDTH / 2;
            var y1 = this.y + turret.y - BOSS_TURRET_HEIGHT / 2;
            var w1 = BOSS_TURRET_WIDTH;
            var h1 = BOSS_TURRET_HEIGHT;
            var x2 = bullet.x;
            var y2 = bullet.y;
            var w2 = bullet.width;
            var h2 = bullet.height;
            if (this.coordsCollide(x1, y1, w1, h1, x2, y2, w2, h2)) {
              turret.hurt = true;
              turret.hurtTimer = 2;
              turret.health--;
              if (turret.health <= 0) {
                this.numTurretsAlive--;
                this.turrets.splice(j, 1);
              }
              bullet.active = false;
              continue;
            }
          }
        }
      }
    }
    else if (this.alive) {
      for (var i = 0; i < bullets.length; i++) {
        var bullet = bullets[i];
        if (bullet.active === true) {
          var turret = this.turrets[j];
          var x1 = this.x;
          var y1 = this.y;
          var w1 = this.width;
          var h1 = this.height;
          var x2 = bullet.x;
          var y2 = bullet.y;
          var w2 = bullet.width;
          var h2 = bullet.height;
          if (this.coordsCollide(x1, y1, w1, h1, x2, y2, w2, h2)) {
            this.hurt = true;
            this.hurtTimer = 2;
            this.health--;
            if (this.health <= 0) {
              this.alive = false;
            }
            bullet.active = false;
            continue;
          }
        }
      }
    }
  }

  this.coordsCollide = function(x1, y1, w1, h1, x2, y2, w2, h2) {
    var rect1left = x1;
    var rect1right = x1 + w1;
    var rect1top = y1;
    var rect1bottom = y1 + h1;

    var rect2left = x2;
    var rect2right = x2 + w2;
    var rect2top = y2;
    var rect2bottom = y2 + h2;

    if (rect1left >= rect2right) {
      return false;
    }
    else if (rect1right <= rect2left) {
      return false;
    }
    else if (rect1top >= rect2bottom) {
      return false;
    }
    else if (rect1bottom <= rect2top) {
      return false;
    }
    else {
      return true;
    }
  }

  this.draw = function() {
    if (this.alive) {
      var imageToUse;
      if (this.hurt) {
        imageToUse = bossHurtImage;
      }
      else {
        imageToUse = bossImage;
      }
      canvasContext.drawImage(imageToUse, this.x, this.y);

      for (var i = 0; i < this.turrets.length; i++) {
        var turret = this.turrets[i];
        var angle = turret.angle;
        canvasContext.save();
        canvasContext.translate(this.x + turret.x, this.y + turret.y);
        canvasContext.rotate(angle);
        var imageToUse;
        if (turret.hurt) {
          imageToUse = bossTurretHurtImage;
        }
        else {
          imageToUse = bossTurretImage;
        }
        canvasContext.drawImage(imageToUse, -16, -16);
        canvasContext.restore();
      }
    }
  };
}
