function InstructionsScene() {
  this.canExit = false;

  this.update = function() {
    if (enterPressed && this.canExit) {
      goToMenu();
    }
    else if (!enterPressed) {
      this.canExit = true;
    }
  }

  this.draw = function() {
    drawRect(0, 0, GAME_WIDTH, GAME_HEIGHT, 'black');

    canvasContext.font = '48px Times';
    drawText('How to Play', GAME_WIDTH/2, 50, 'white', 'center', 'middle');

    canvasContext.font = '26px Times';
    drawText('arrow keys: move character / change options', GAME_WIDTH/2, 230, 'white', 'center', 'middle');
    drawText('enter key: pause game / select option', GAME_WIDTH/2, 280, 'white', 'center', 'middle');

    drawText('Press Enter to go back', GAME_WIDTH/2, 450, 'white', 'center', 'middle');
  }
}
