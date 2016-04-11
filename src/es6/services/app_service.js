class AppSvc {

  static resetLevel() {
    flag.set('first step done', false);
    flag.set('user can move', false);
    game.targetsUnfilled = 0;
    game.steps = 0;
    emap = Object.create(null);
  }

  static nextLevel() {
    this.renewPassedLevels();
    events.modalLogic.openModal('nextlevel');
  }

  static runApp() {
    flag.set('user can move', true);
    Events.read();
  }

  static renewPassedLevels() {
    if ((+game.passed_levels['L' + game.currentLevel] > +game.steps) || (!game.passed_levels['L' + game.currentLevel])) {
      game.passed_levels['L' + game.currentLevel] = +game.steps + 1;
      localStorage.setItem("passed_levels", JSON.stringify(game.passed_levels));
    }
  }

  static changeURL(level) {
    window.location.hash = "#level" + level;
  }

  static hashUpdate() {
    let level = window.location.hash.split('#level');
    game.currentLevel = level[1];
    View.buildLevelList();
  }

  static mouseEvent(id) {
    if ((id)&&(id!=='map')){
      let part1 = id.split('c');
      let coordinatesArr = part1[1].split('x');
      let [x,y] = coordinatesArr;

      if ((x == game.userPos.x - 1) && (y == game.userPos.y)) {
        MoveSvc.rememberPosition('left');
      }
      if ((x == game.userPos.x + 1) && (y == game.userPos.y)) {
        MoveSvc.rememberPosition('right');
      }
      if ((x == game.userPos.x) && (y == game.userPos.y - 1)) {
        MoveSvc.rememberPosition('up');
      }
      if ((x == game.userPos.x) && (y == game.userPos.y + 1)) {
        MoveSvc.rememberPosition('down');
      }
    }
  }
}