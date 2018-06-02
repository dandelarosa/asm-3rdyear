function Treasure() {
  // Initialize these numbers because undefined makes it hard to debug
  this.x = 0;
  this.y = 0;
  this.dx = 0;
  this.dy = 0;

  this.draw = function() {
    canvasContext.drawImage(treasureImage, this.x, this.y);
  }
}
