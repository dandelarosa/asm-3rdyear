const MENU_TOGGLE_DELAY = 12;

function MenuScene() {
  this.currentOption = 0;
  this.menuToggleTimer = 0;
  this.canExit = false;

  this.update = function() {
    if (enterPressed && this.canExit) {
      if (this.currentOption == 0) {
        restartGame();
      }
      else if (this.currentOption == 1) {
        goToInstructions();
      }
      else if (this.currentOption == 2) {
        goToCredits();
      }
    }
    else if (!enterPressed) {
      this.canExit = true;
    }

    if (upPressed && this.menuToggleTimer == 0) {
      this.currentOption--;
      if (this.currentOption < 0) {
        this.currentOption = 2;
      }
      this.menuToggleTimer = MENU_TOGGLE_DELAY;
    }
    if (downPressed && this.menuToggleTimer == 0) {
      this.currentOption++;
      if (this.currentOption > 2) {
        this.currentOption = 0;
      }
      this.menuToggleTimer = MENU_TOGGLE_DELAY;
    }

    if (this.menuToggleTimer > 0) {
      this.menuToggleTimer--;
    }
    if (!upPressed && !downPressed) {
      this.menuToggleTimer = 0;
    }
  }

  this.draw = function() {
    drawRect(0, 0, GAME_WIDTH, GAME_HEIGHT, 'white');
    canvasContext.drawImage(titleBgImage, 0, 0);

    canvasContext.font = '48px Times';
    drawText('David\'s World 3', GAME_WIDTH/2, 180, 'black', 'center', 'middle');
    canvasContext.font = '36px Times';
    drawText('Prototype', GAME_WIDTH/2, 230, 'black', 'center', 'middle');

    canvasContext.font = '30px Times';

    if (this.currentOption == 0) {
      drawText('> Start Game <', GAME_WIDTH/2, 300, 'yellow', 'center', 'middle');
    }
    else {
      drawText('Start Game', GAME_WIDTH/2, 300, 'black', 'center', 'middle');
    }
    

    if (this.currentOption == 1) {
      drawText('> Instructions <', GAME_WIDTH/2, 340, 'yellow', 'center', 'middle');
    }
    else {
      drawText('Instructions', GAME_WIDTH/2, 340, 'black', 'center', 'middle');
    }
    
    if (this.currentOption == 2) {
      drawText('> Credits <', GAME_WIDTH/2, 380, 'yellow', 'center', 'middle');
    }
    else {
      drawText('Credits', GAME_WIDTH/2, 380, 'black', 'center', 'middle');
    }
  }
}
