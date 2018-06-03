function ArcadeShmupScene(tilemap) {
  this.init = function() {
    this.playerShip = new PlayerShip();
    this.playerShip.x = 224;
    this.playerShip.y = 420;
  };
  this.init();

  this.update = function() {
    if (this.playerShip) {
      this.playerShip.oldX = this.playerShip.x;
      this.playerShip.oldY = this.playerShip.y;

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
    }
  }

  this.draw = function() {
    canvasContext.drawImage(oceanImage, 0, 0);

    this.playerShip && this.playerShip.draw();
  }
}
