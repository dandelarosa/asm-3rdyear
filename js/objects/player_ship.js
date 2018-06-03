function PlayerShip() {
  this.init = function() {
    this.x = 0;
    this.y = 0;
    this.width = 32;
    this.height = 32;
  };
  this.init();

  this.draw = function() {
    canvasContext.drawImage(playerShipImage, this.x, this.y);
  }
}
