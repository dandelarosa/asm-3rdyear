const GAME_WIDTH = 640;
const GAME_HEIGHT = 480;
const FPS = 30;

const TILE_NOTHING = 0;
const TILE_FLOOR = 1;
const TILE_BRICK_BLOCK = 2;
const TILE_STAIRS = 3;

var canvas, canvasContext;

var currentLevel = 1;
var youWin = false;

window.addEventListener("load", function(event) {
  canvas = document.createElement('canvas');
  canvas.width = GAME_WIDTH;
  canvas.height = GAME_HEIGHT;
  document.body.appendChild(canvas);
  canvasContext = canvas.getContext('2d');

  drawRect(0, 0, GAME_WIDTH, GAME_HEIGHT, 'black');
  drawText("LOADING ASSETS", GAME_WIDTH/2, GAME_HEIGHT/2, 'white', 'center', 'middle');

  loadImages();
});

function imageLoadingDoneSoStartGame() {
  setInterval(eachFrame, 1000/FPS);
  
  setupInput();

  loadScene();
}

function loadScene() {
  this.currentScene = new MenuScene();
}

function eachFrame() {
  updateGame();
  drawGame();
  if (this.nextScene) {
    this.currentScene = this.nextScene;
    this.nextScene = null;
  }
}

function updateGame() {
  this.currentScene.update();
}

function drawGame() {
  drawRect(0, 0, GAME_WIDTH, GAME_HEIGHT, 'black');
  this.currentScene.draw();
}

function goToMenu() {
  this.nextScene = new MenuScene();
}

function goToInstructions() {
  this.nextScene = new InstructionsScene();
}

function goToCredits() {
  this.nextScene = new CreditsScene();
}

function goToNextLevel() {
  this.currentLevel++;
  var levelId = 'level' + this.currentLevel;
  this.nextScene = new MainScene(TileMaps[levelId]);
}

function restartGame() {
  youWin = false;
  this.currentLevel = 1;
  this.nextScene = new MainScene(TileMaps['level1']);
}
