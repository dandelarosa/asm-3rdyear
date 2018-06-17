const KEY_ENTER = 13;
const KEY_SPACE = 32;
const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;
const KEY_A = 65;
const KEY_B = 66;
const KEY_C = 67;
const KEY_D = 68;
const KEY_E = 69;
const KEY_F = 70;
const KEY_G = 71;
const KEY_H = 72;
const KEY_I = 73;
const KEY_J = 74;
const KEY_K = 75;
const KEY_L = 76;
const KEY_M = 77;
const KEY_N = 78;
const KEY_O = 79;
const KEY_P = 80;
const KEY_Q = 81;
const KEY_R = 82;
const KEY_S = 83;
const KEY_T = 84;
const KEY_U = 85;
const KEY_V = 86;
const KEY_W = 87;
const KEY_X = 88;
const KEY_Y = 89;
const KEY_Z = 90;

var enterPressed = false;
var spacePressed = false;
var leftPressed = false;
var upPressed = false;
var rightPressed = false;
var downPressed = false;
var bPressed = false;

function setupInput() {
  document.addEventListener('keydown', onKeydown);
	document.addEventListener('keyup', onKeyup);
}

function onKeydown(evt) {
  var keyUsed = false;
  if (evt.keyCode === KEY_ENTER) {
    enterPressed = true;
    keyUsed = true;
  }
  if (evt.keyCode === KEY_SPACE) {
    spacePressed = true;
    keyUsed = true;
  }
  if (evt.keyCode === KEY_LEFT_ARROW) {
    leftPressed = true;
    keyUsed = true;
  }
  if (evt.keyCode === KEY_UP_ARROW) {
    upPressed = true;
    keyUsed = true;
  }
  if (evt.keyCode === KEY_RIGHT_ARROW) {
    rightPressed = true;
    keyUsed = true;
  }
  if (evt.keyCode === KEY_DOWN_ARROW) {
    downPressed = true;
    keyUsed = true;
  }
  if (evt.keyCode === KEY_B) {
    bPressed = true;
    keyUsed = true;
  }

  if (keyUsed) {
    evt.preventDefault();
  }
}

function onKeyup(evt) {
  if (evt.keyCode === KEY_ENTER) {
    enterPressed = false;
  }
  if (evt.keyCode === KEY_SPACE) {
    spacePressed = false;
  }
  if (evt.keyCode === KEY_LEFT_ARROW) {
    leftPressed = false;
  }
  if (evt.keyCode === KEY_UP_ARROW) {
    upPressed = false;
  }
  if (evt.keyCode === KEY_RIGHT_ARROW) {
    rightPressed = false;
  }
  if (evt.keyCode === KEY_DOWN_ARROW) {
    downPressed = false;
  }
  if (evt.keyCode === KEY_B) {
    bPressed = false;
  }
}
