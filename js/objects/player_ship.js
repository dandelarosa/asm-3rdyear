function PlayerShip() {
  // Initialize these numbers because undefined makes it hard to debug
  this.x = 0;
  this.y = 0;

  this.draw = function() {
    canvasContext.drawImage(playerShipImage, this.x, this.y);
  }
}
