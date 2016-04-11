game = Object.create(null);
game.userPos = Object.create(null);
Object.defineProperty(game, 'steps', {
  get: function () {
    return document.getElementById("steps").value
  },
  set: function (newValue) {
    document.getElementById("steps").value = newValue;
    if (!flag.get('first step done')) {
      flag.set('first step done', true);
    }
  },
  configurable: true
});
Object.defineProperty(game, 'targetsUnfilled', {
  get: function () {
    return this.targetsUnfilledValue;
  },
  set: function (newValue) {
    this.targetsUnfilledValue = newValue;
    document.getElementById("targetsUnfilled").value = newValue;
    if (flag.get('first step done')) {
      if (newValue === 0) {
        AppSvc.nextLevel();
      }
    }
  },
  configurable: true
});
game.modalContent = {
  welcome(){
    document.getElementById('modal-welcome').hidden = false;
    document.getElementById('modal-new-level').hidden = true;
  },
  nextlevel(){
    let currentLevel = game.currentLevel;
    document.getElementById('modal-welcome').hidden = true;
    document.getElementById('modal-new-level').hidden = false;
  }
}
Object.defineProperty(game, 'currentLevel', {
  get: function () {
    return this.currentLevelValue;
  },
  set: function (mapNum) {
    localStorage.setItem("level", mapNum);
    View.levelNumView(mapNum);
    MapSvc.generateMap(mapNum);
    this.currentLevelValue = mapNum;
  },
  configurable: true
});

game.passed_levels = Object.create(null);
for (var i = 1; i <= 60; i++) {
  game.passed_levels['L'+i] = false;
}
if (localStorage.getItem("passed_levels")) {
  game.passed_levels = JSON.parse(localStorage.getItem("passed_levels"));
} else {
  localStorage.setItem("passed_levels", JSON.stringify(game.passed_levels));
}