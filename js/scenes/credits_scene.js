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
    drawRect(0, 0, GAME_WIDTH, GAME_HEIGHT, 'white');
    canvasContext.drawImage(titleBgImage, 0, 0);

    canvasContext.font = '48px Times';
    drawText('Credits', GAME_WIDTH/2, 50, 'black', 'center', 'middle');

    canvasContext.font = '30px Times';

    drawText('Annual Saga Monthly Game 3 (June 2018)', GAME_WIDTH/2, 150, 'black', 'center', 'middle');
    drawText('David\'s World 3 Prototype', GAME_WIDTH/2, 200, 'black', 'center', 'middle');

    drawText('All Programming: Dan Dela Rosa', GAME_WIDTH/2, 300, 'black', 'center', 'middle');
    drawText('All Art: Dan Dela Rosa', GAME_WIDTH/2, 350, 'black', 'center', 'middle');

    drawText('Press Enter to go back', GAME_WIDTH/2, 450, 'black', 'center', 'middle');
  }
}
