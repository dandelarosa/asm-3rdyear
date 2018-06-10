const PLAYER_BULLET_WIDTH = 8;
const PLAYER_BULLET_HEIGHT = 8;

function PlayerBullet(x, y) {
  this.init = function() {
    this.x = x;
    this.y = y;
    this.width = PLAYER_BULLET_WIDTH;
    this.height = PLAYER_BULLET_HEIGHT;
    this.active = false;
  };
  this.init();

  this.update = function() {
    if (this.active) {
      this.y -= 15;
    }
  }

  this.draw = function() {
    if (this.active) {
      canvasContext.drawImage(playerBulletImage, this.x, this.y);
    }
  };
}
