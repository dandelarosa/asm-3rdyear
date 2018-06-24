const ENEMY_BULLET_WIDTH = 8;
const ENEMY_BULLET_HEIGHT = 8;
const ENEMY_BULLET_SPEED = 4;

function EnemyBullet(turretX, turretY, shipX, shipY) {
  this.init = function() {
    var angle = Math.atan2(shipY - turretY, shipX - turretX);
    this.dx = ENEMY_BULLET_SPEED * Math.cos(angle);
    this.dy = ENEMY_BULLET_SPEED * Math.sin(angle);

    this.x = turretX + 16 * Math.cos(angle);
    this.y = turretY + 16 * Math.sin(angle);
    this.width = ENEMY_BULLET_WIDTH;
    this.height = ENEMY_BULLET_HEIGHT;
    this.active = true;
  };
  this.init();

  this.update = function() {
    if (this.active) {
      this.x += this.dx;
      this.y += this.dy;
    }
  }

  this.draw = function() {
    if (this.active) {
      canvasContext.drawImage(enemyBulletImage, this.x, this.y);
    }
  }
}
