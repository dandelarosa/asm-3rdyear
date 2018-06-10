function EnemyScheduler() {
  this.init = function() {
    this.currentTime = 0;
  };
  this.init();

  this.getEnemiesForThisFrame = function() {
    // All enemies should be positioned relative to camera
    if (this.currentTime === 120) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32), 
      ];
    }
    else if (this.currentTime === 240) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32),
      ];
    }
    return [];
  }

  this.tick = function() {
    this.currentTime++;
  }
}
