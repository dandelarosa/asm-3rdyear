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
    }
  };
}
