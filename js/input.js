const KEY_ENTER = 13;
const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;

var enterPressed = false;
var leftPressed = false;
var upPressed = false;
var rightPressed = false;
var downPressed = false;

function setupInput() {
  document.addEventListener('keydown', onKeydown);
	document.addEventListener('keyup', onKeyup);
}

function onKeydown(evt) {
  if (evt.keyCode === KEY_ENTER) {
    enterPressed = true;
  }
  if (evt.keyCode === KEY_LEFT_ARROW) {
    leftPressed = true;
  }
  if (evt.keyCode === KEY_UP_ARROW) {
    upPressed = true;
  }
  if (evt.keyCode === KEY_RIGHT_ARROW) {
    rightPressed = true;
  }
  if (evt.keyCode === KEY_DOWN_ARROW) {
    downPressed = true;
  }

  evt.preventDefault();
}

function onKeyup(evt) {
  if (evt.keyCode === KEY_ENTER) {
    enterPressed = false;
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
}
