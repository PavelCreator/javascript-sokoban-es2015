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
      game.currentLevel = value;
      localStorage.setItem("level", value);
    };
    document.getElementById('restart').onclick = () => {
      MapSvc.generateMap(game.currentLevel);
    };
    document.getElementById('go-to-next-level').onclick = () => {
      game.currentLevel++;
      events.modalLogic.closeModal();
    };
  };

  static resizeEvent() {
    addEvent(window, "resize", function (event) {
    });
  };

  static read() {
    this.keypress();
    this.uiPress();
    events.modalLogic.watchers();
  };
}
Events.prototype.modalLogic = {
  watchers() {
    document.getElementById("openModal").onclick = () => {
      events.modalLogic.openModal();
    }
    document.getElementById("closeModal").onclick = () => {
      console.log("qazwsx");
      events.modalLogic.closeModal();
    }
    window.onclick = (event) => {
      if (event.target == document.getElementById('modalWrapper')) {
        events.modalLogic.closeModal();
      }
    }
  },
  openModal(nextlevel) {
    (nextlevel)
      ? game.modalContent.nextlevel()
      : game.modalContent.welcome();
    document.getElementById('modalWrapper').style.display = "flex";
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
  },
  closeModal() {
    document.getElementById('modalWrapper').style.display = "none";
    document.getElementsByTagName("html")[0].style.overflow = "auto";
  }
}
let events = new Events();