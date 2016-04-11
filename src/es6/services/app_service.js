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

  static rememberLastStep(){
    view.lastStep.unblock();
    game.lastStep[game.steps] = Object.create(null);
    game.lastStep[game.steps].emap = Object.assign({}, emap);
    game.lastStep[game.steps].targetsUnfilled = game.targetsUnfilled;
    game.lastStep[game.steps].steps = game.steps;
  }

  static restoreLastStep(){
    let lastStep = +game.steps - 1;
    console.log("qazwsx");
    console.log("game.lastStep[lastStep] =", game.lastStep[lastStep]);

    emap = game.lastStep[lastStep].emap;
    game.targetsUnfilled = game.lastStep[lastStep].targetsUnfilled;
    game.steps = game.lastStep[lastStep].steps;
    MapSvc.restoreMap();
    delete game.lastStep[lastStep];
    if(!game.lastStep[0]){
      view.lastStep.block();
    }
  }

}