function ArcadeShmupScene(tilemap) {
  this.init = function() {
    this.playerShip = new PlayerShip();
    this.playerShip.x = 224;
    this.playerShip.y = 420;

    this.playerBullets = [];
    for (var i = 0; i < 4; i++) {
      this.playerBullets.push(new PlayerBullet(0,0));
    }
    this.canShoot = true;
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

      if (spacePressed) {
        if (this.canShoot) {
          for (var i = 0; i < this.playerBullets.length; i++) {
            var playerBullet = this.playerBullets[i];
            if (playerBullet.active === false) {
              playerBullet.x = this.playerShip.x + (this.playerShip.width / 2) - (playerBullet.width / 2);
              playerBullet.y = this.playerShip.y;
              playerBullet.active = true;
              break;
            }
          }
          this.canShoot = false;
        }
      }
      else {
        this.canShoot = true;
      }  
    }

    for (var i = 0; i < this.playerBullets.length; i++) {
      var playerBullet = this.playerBullets[i];
      playerBullet.update();
    }
  }

  this.draw = function() {
    canvasContext.drawImage(oceanImage, 0, 0);

    for (var i = 0; i < this.playerBullets.length; i++) {
      var playerBullet = this.playerBullets[i];
      playerBullet.draw();
    }

    this.playerShip && this.playerShip.draw();
  }
}
