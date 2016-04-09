game = Object.create(null),
game.userPos = Object.create(null);
Object.defineProperty(game, 'steps', {
  get: function () {
    return document.getElementById("steps").value
  },
  set: function (newValue) {
    document.getElementById("steps").value = newValue;
    if (!flag.get('game started')) {
      flag.set('game started', true);
    }
  },
  configurable: true
});
Object.defineProperty(game, 'targetsUnfilled', {
  get: function () {
    return document.getElementById("targetsUnfilled").value
  },
  set: function (newValue) {
    document.getElementById("targetsUnfilled").value = newValue;
    if (flag.get('game started')) {
      if (newValue === 0) {
        AppSvc.gameOver();
      }
    }
  },
  configurable: true
});
game.targetsUnfilled = 0;
game.steps = 0;