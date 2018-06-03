function CreditsScene() {
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
    drawText('Credits', GAME_WIDTH/2, 50, 'white', 'center', 'middle');

    canvasContext.font = '26px Times';

    drawText('Annual Saga Monthly Game 3 (June 2018)', GAME_WIDTH/2, 150, 'white', 'center', 'middle');
    drawText('David\'s World 3 Prototype', GAME_WIDTH/2, 200, 'white', 'center', 'middle');

    drawText('All Programming: Dan Dela Rosa', GAME_WIDTH/2, 300, 'white', 'center', 'middle');
    drawText('All Art: Dan Dela Rosa', GAME_WIDTH/2, 350, 'white', 'center', 'middle');

    drawText('Press Enter to go back', GAME_WIDTH/2, 450, 'white', 'center', 'middle');
  }
}
