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
game.modalContent = {
  welcome(){
    document.getElementById('modal-welcome').hidden = false;
    document.getElementById('modal-new-level').hidden = true;
  },
  nextlevel(){
    let currentLevel = document.getElementById('level-list').value;
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
    console.log(game.currentLevel);
  },
  configurable: true
});