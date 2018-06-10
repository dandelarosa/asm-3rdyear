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
    // 0:10
    else if (this.currentTime === 300) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32),
      ];
    }

    // 0:15
    else if (this.currentTime === 450) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32),
      ];
    }

    // 0:20
    else if (this.currentTime === 600) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32),
      ];
    }

    // 0:25
    else if (this.currentTime === 750) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32),
      ];
    }

    // 0:30
    else if (this.currentTime === 900) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32),
      ];
    }

    // 0:35
    else if (this.currentTime === 1050) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32),
      ];
    }

    // 0:40
    else if (this.currentTime === 1200) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32),
      ];
    }

    // 0:45
    else if (this.currentTime === 1350) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32),
      ];
    }

    // 0:50
    else if (this.currentTime === 1500) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32),
      ];
    }

    // 0:55
    else if (this.currentTime === 1650) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32),
      ];
    }

    // 1:00
    else if (this.currentTime === 1800) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32),
      ];
    }

    // 1:05
    else if (this.currentTime === 1950) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32),
      ];
    }

    // 1:10
    else if (this.currentTime === 2100) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32),
      ];
    }

    // 1:15
    else if (this.currentTime === 2350) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32),
      ];
    }

    // 1:20
    else if (this.currentTime === 2400) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32),
      ];
    }

    // 1:25
    else if (this.currentTime === 2550) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32),
      ];
    }

    // 1:30
    else if (this.currentTime === 2700) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32),
      ];
    }

    // 1:35
    else if (this.currentTime === 2850) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32),
      ];
    }

    // 1:40
    else if (this.currentTime === 3000) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32),
      ];
    }

    // 1:45
    else if (this.currentTime === 3150) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32),
      ];
    }

    // 1:50
    else if (this.currentTime === 3300) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32),
      ];
    }

    // 1:55
    else if (this.currentTime === 3450) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32),
      ];
    }

    // 2:00
    else if (this.currentTime === 3600) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32),
      ];
    }

    // 2:05
    else if (this.currentTime === 3750) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32),
      ];
    }

    // 2:10
    else if (this.currentTime === 3900) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32),
      ];
    }

    // 2:15
    else if (this.currentTime === 4050) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32),
      ];
    }

    // 2:20
    else if (this.currentTime === 4200) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32),
      ];
    }

    // 2:25
    else if (this.currentTime === 4350) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32),
      ];
    }

    // 2:30
    else if (this.currentTime === 4500) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32),
      ];
    }

    // 2:35
    else if (this.currentTime === 4650) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32),
      ];
    }

    // 2:40
    else if (this.currentTime === 4800) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32),
      ];
    }

    // 2:45
    else if (this.currentTime === 4950) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32),
      ];
    }

    // 2:50
    else if (this.currentTime === 5100) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32),
      ];
    }

    // 2:55
    else if (this.currentTime === 5250) {
      return [
        new EnemyShip(96, -32),
        new EnemyShip(160, -32),
        new EnemyShip(224, -32),
        new EnemyShip(288, -32),
        new EnemyShip(352, -32),
      ];
    }

    // 3:00
    else if (this.currentTime === 5400) {
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
