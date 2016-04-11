game = Object.create(null);
game.userPos = Object.create(null);
Object.defineProperty(game, 'steps', {
  get: function () {
    return this.stepsValue;
  },
  set: function (newValue) {
    this.stepsValue = newValue;
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
Object.defineProperty(game, 'currentLevel', {
  get: function () {
    return this.currentLevelValue;
  },
  set: function (mapNum) {
    this.currentLevelValue = mapNum;
    localStorage.setItem("level", mapNum);
    view.lastStep.block();
    View.levelNumView(mapNum);
    MapSvc.generateMap(mapNum);
  },
  configurable: true
});

game.passedLevels = Object.create(null);
for (var i = 1; i <= 60; i++) {
  game.passedLevels['L'+i] = false;
}
if (localStorage.getItem("passedLevels")) {
  game.passedLevels = JSON.parse(localStorage.getItem("passedLevels"));
} else {
  localStorage.setItem("passedLevels", JSON.stringify(game.passedLevels));
}
game.lastStep = Object.create(null);
game.dimensions = Object.create(null);