const BOSS_WIDTH = 400;
const BOSS_HEIGHT = 200;

const BOSS_MAX_DISTANCE_TRAVELED = 240;

function Boss(x, y) {
  this.init = function() {
    this.x = x;
    this.y = y;
    this.width = BOSS_WIDTH;
    this.height = BOSS_HEIGHT;
    this.alive = true;
    this.distanceTraveled = 0;

    this.turrets = [
      { x: 0, y: 0, angle: 0},
      { x: 0, y: 0, angle: 90},
      { x: 0, y: 0, angle: 180},
      { x: 0, y: 0, angle: 270},
      { x: 64, y: 0, angle: 0 },
      { x: 64, y: 150, angle: 0 },
      { x: 320, y: 0, angle: 0 },
      { x: 320, y: 150, angle: 0 },
    ]
  };
  this.init();

  this.update = function() {
    if (this.distanceTraveled < BOSS_MAX_DISTANCE_TRAVELED) {
      var distanceToTravel = 1;
      this.y += distanceToTravel;
      this.distanceTraveled += distanceToTravel;
    }
  };

  this.draw = function() {
    if (this.alive) {
      drawRect(this.x, this.y, this.width, this.height, 'darkgray');

      for (var i = 0; i < this.turrets.length; i++) {
        var turret = this.turrets[i];
        var angle = turret.angle;
        canvasContext.save();
        canvasContext.translate(this.x + turret.x, this.y + turret.y);
        canvasContext.rotate(angle * Math.PI / 180);
        canvasContext.drawImage(bossTurretImage, -16, -16);
        canvasContext.restore();
      }
    }
  };
}
