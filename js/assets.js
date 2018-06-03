var oceanImage = document.createElement("img");

// Old assets from the previous game
var tileImage = document.createElement("img");
var playerImage = document.createElement("img");
var treasureImage = document.createElement("img");

var imagesToLoad = [
  { 
    imgPointer: tileImage, 
    path: 'assets/tiles.png'
  },
  { 
    imgPointer: playerImage, 
    path: 'assets/player-right.png'
  },
  {
    imgPointer: treasureImage,
    path: 'assets/90s_rupee.png'
  },
  {
    imgPointer: oceanImage,
    path: 'assets/poc-ocean.png'
  }
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
