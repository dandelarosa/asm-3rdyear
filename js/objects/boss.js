const BOSS_WIDTH = 400;
const BOSS_HEIGHT = 200;

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

    this.turrets = [
      { x: 48, y: 48, angle: 0 },
      { x: 48, y: 152, angle: 0 },
      { x: 352, y: 48, angle: 0 },
      { x: 352, y: 152, angle: 0 },
    ];
    this.fireTimer = BOSS_FIRE_TIMER_MAX;
  };
  this.init();

  this.update = function(ship) {
    if (this.distanceTraveled < BOSS_MAX_DISTANCE_TRAVELED) {
      this.y += BOSS_TRAVEL_SPEED;
      this.distanceTraveled += BOSS_TRAVEL_SPEED;
    }

    if (this.alive && ship) {
      for (var i = 0; i < this.turrets.length; i++) {
        var turret = this.turrets[i];
        var turretX = this.x + turret.x;
        var turretY = this.y + turret.y;
        var shipX = ship.x + ship.width / 2;
        var shipY = ship.y + ship.height / 2;

        turret.angle = Math.atan2(shipY - turretY, shipX - turretX);
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

  this.draw = function() {
    if (this.alive) {
      drawRect(this.x, this.y, this.width, this.height, 'darkgray');

      for (var i = 0; i < this.turrets.length; i++) {
        var turret = this.turrets[i];
        var angle = turret.angle;
        canvasContext.save();
        canvasContext.translate(this.x + turret.x, this.y + turret.y);
        canvasContext.rotate(angle);
        canvasContext.drawImage(bossTurretImage, -16, -16);
        canvasContext.restore();
      }
    }
  };
}
