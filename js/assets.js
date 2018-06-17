// List these in alphabetical order
var bossTurretImage = document.createElement("img");
var enemyImage = document.createElement("img");
var oceanImage = document.createElement("img");
var playerBulletImage = document.createElement("img");
var playerShipImage = document.createElement("img");

// Old assets from the previous game
var tileImage = document.createElement("img");

var imagesToLoad = [
  { 
    imgPointer: bossTurretImage, 
    path: 'assets/boss_turret.png'
  },
  {
    imgPointer: enemyImage,
    path: 'assets/enemy.png'
  },
  {
    imgPointer: oceanImage,
    path: 'assets/poc-ocean.png'
  },
  { 
    imgPointer: playerBulletImage, 
    path: 'assets/player_bullet.png'
  },
  { 
    imgPointer: playerShipImage, 
    path: 'assets/player_ship.png'
  },
];
var imagesLoaded = 0;

function onImageLoad() {
  imagesLoaded++;
  if (imagesLoaded === imagesToLoad.length) {
    imageLoadingDoneSoStartGame();
  }
}

function loadImage(imgPointer, path) {
  imgPointer.onload = onImageLoad;
  imgPointer.src = path;
}

function loadImages() {
  for (var i = 0; i < imagesToLoad.length; i++) {
    imageToLoad = imagesToLoad[i];
    loadImage(imageToLoad.imgPointer, imageToLoad.path);
  }
}
