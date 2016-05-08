class AppSvc {

  static resetLevel() {
    flag.set('first step done', false);
    flag.set('user can move', false);
    game.targetsUnfilled = 0;
    game.steps = 0;
    game.lastStep = Object.create(null);
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
    if ((+game.passedLevels['L' + game.currentLevel] > +game.steps) || (!game.passedLevels['L' + game.currentLevel])) {
      game.passedLevels['L' + game.currentLevel] = +game.steps + 1;
      localStorage.setItem("passedLevels", JSON.stringify(game.passedLevels));
    }
  }

  static changeURL(level) {
    window.location.hash = "#level" + level;
  }

  static hashUpdate() {
    if (flag.get('hash update block') === false) {
      let level = window.location.hash.split('#level');
      game.currentLevel = level[1];
      View.buildLevelList();
    }
  }

  static mouseEvent(id) {
    if ((id) && (id !== 'map')) {
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

  static rememberLastStep() {
    flag.set('last step block', false);
    view.lastStep.unblock();
    view.restart.unblock();
    game.lastStep[game.steps] = Object.create(null);
    //game.lastStep[game.steps].emap = Object.assign({}, emap);
    game.lastStep[game.steps].emap = copy({}, emap);
    game.lastStep[game.steps].targetsUnfilled = game.targetsUnfilled;
    game.lastStep[game.steps].steps = game.steps;
    if (game.lastStep[+game.steps - 50]) {
      delete game.lastStep[+game.steps - 50];
    }
    View.countOfLastSteps();
  }

  static restoreLastStep() {
    if (flag.get('last step block')) {
      return;
    }
    let lastStep = +game.steps - 1;

    emap = game.lastStep[lastStep].emap;
    game.targetsUnfilled = game.lastStep[lastStep].targetsUnfilled;
    game.steps = game.lastStep[lastStep].steps;

    View.restartBlockLogic();
    MapSvc.restoreMap();

    delete game.lastStep[lastStep];
    View.countOfLastSteps();
    if (countOfOject(game.lastStep) == 0) {
      flag.set('last step block', true);
      view.lastStep.block();
    }

  }

  static saveStep() {
    game.memoryStep = Object.create(null);

    game.memoryStep.emap = copy({}, emap);

    game.memoryStep.targetsUnfilled = game.targetsUnfilled;
    game.memoryStep.steps = game.steps;

    game.memoryStep.lastStep = copy({}, game.lastStep);

    game.memoryStep.currentLevel = game.currentLevel;
    game.memoryStep.dimensions = copy({}, game.dimensions);

    view.loadStep.unblock();
    localStorage.setItem("memoryStep", JSON.stringify(game.memoryStep));
  }

  static loadStep() {
    game.memoryStep = JSON.parse(localStorage.getItem("memoryStep"));
    var loadLevel = game.memoryStep.currentLevel;

    if (loadLevel != game.currentLevel) {
      game.currentLevelValue = loadLevel;
      localStorage.setItem("level", loadLevel);
      View.levelNumView(loadLevel);
      game.dimensions = copy({}, game.memoryStep.dimensions);

      view.loadStep.unblock();
      View.buildLevelList();
    }

    emap = copy({}, game.memoryStep.emap);
    game.targetsUnfilled = game.memoryStep.targetsUnfilled;
    game.steps = game.memoryStep.steps;

    View.restartBlockLogic();
    MapSvc.restoreMap();

    game.lastStep = copy({}, game.memoryStep.lastStep);
    View.countOfLastSteps();
    if (countOfOject(game.lastStep) == 0) {
      flag.set('last step block', true);
      view.lastStep.block();
    } else {
      flag.set('last step block', false);
      view.lastStep.unblock();
    }

  }

}