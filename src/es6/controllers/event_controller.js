class Events {
  static keypress() {
    let pressed = (e) => {
      var ctrlDown = e.ctrlKey || e.metaKey
      switch (e.which) {
        case 38:
        case 104:
          MoveSvc.rememberPosition('up');
          break;
        case 39:
        case 102:
          MoveSvc.rememberPosition('right');
          break;
        case 40:
        case 98:
          MoveSvc.rememberPosition('down');
          break;
        case 37:
        case 100:
          MoveSvc.rememberPosition('left');
          break;
      }
      /*console.log(e.which);*/
    }
    window.captureEvents(Event.KEYDOWN);
    window.onkeydown = pressed;
  };

  static uiPress() {
    document.getElementById('level-list').onchange = () => {
      let value = document.getElementById('level-list').value;
      MapSvc.generateMap(value);
      localStorage.setItem("level", value);
    };
    document.getElementById('restart').onclick = () => {
      MapSvc.generateMap(document.getElementById('level-list').value);
    };
  };

  static resizeEvent() {
    addEvent(window, "resize", function (event) {
    });
  };

  static read() {
    this.keypress();
    this.uiPress();
  };
}