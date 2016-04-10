class AppSvc {

  static resetLevel() {
    flag.set('first step done', false);
    flag.set('user can move', false);
    game.targetsUnfilled = 0;
    game.steps = 0;
    emap = Object.create(null);
  }

  static gameOver() {
    events.modalLogic.openModal('nextlevel');
  }

  static runApp() {
    flag.set('user can move', true);
    Events.read();
  }
}