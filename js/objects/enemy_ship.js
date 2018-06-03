const ENEMY_WIDTH = 32;
const ENEMY_HEIGHT = 32;

function EnemyShip(x, y) {
  this.init = function() {
    this.x = x;
    this.y = y;
    this.width = ENEMY_WIDTH;
    this.height = ENEMY_HEIGHT;
    this.alive = true;
  };
  this.init();

  this.update = function() {
    if (this.alive) {
      this.y += 1;
    }
  };

  this.draw = function() {
    if (this.alive) {
      canvasContext.drawImage(enemyImage, this.x, this.y);
    }
  };
}
