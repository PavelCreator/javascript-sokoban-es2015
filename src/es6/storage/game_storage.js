game = Object.create(null),
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
    return document.getElementById("targetsUnfilled").value
  },
  set: function (newValue) {
    document.getElementById("targetsUnfilled").value = newValue;
    if (flag.get('first step done')) {
      if (newValue === 0) {
        AppSvc.gameOver();
      }
    }
  },
  configurable: true
});