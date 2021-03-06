class Events {
  static keypress() {
    let pressed = (e) => {
      var ctrlDown = e.ctrlKey || e.metaKey
      switch (e.which) {
        case 96:
          AppSvc.restoreLastStep();
          document.getElementById('hidden').focus();
          break;
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
    window.onkeydown = pressed;
  };

  static uiPress() {
    document.getElementById('level-list').onchange = () => {
      let value = document.getElementById('level-list').value;
      game.currentLevel = value;
      localStorage.setItem("level", value);
      document.getElementById('hidden').focus();
    };
    document.getElementById('restart').onclick = () => {
      MapSvc.generateMap(game.currentLevel);
      view.lastStep.block();
      view.restart.block();
      View.countOfLastSteps();
      document.getElementById('hidden').focus();
    };
    document.getElementById('undo_last_step').onclick = () => {
      AppSvc.restoreLastStep();
      document.getElementById('hidden').focus();
    };
    document.getElementById('go-to-next-level').onclick = () => {
      game.currentLevel++;
      View.buildLevelList();
      events.modalLogic.closeModal();
    };
    document.getElementById('save').onclick = () => {
      AppSvc.saveStep();
      View.saveAnimation();
    };
    document.getElementById('load').onclick = () => {
      AppSvc.loadStep();
      View.loadAnimation();
    };
  };

  static hashChange() {
    if ('onhashchange' in window) {
      addEvent(window, 'hashchange', AppSvc.hashUpdate);
    }
    else {
      checkInterval = setInterval(AppSvc.hashUpdate, 200);
    }
  }

  static mouseClickInCell() {
    let map = document.getElementById('map');

    map.ondragstart = function () {
      return false;
    };

    map.onmousedown = function (event) {
      let cells = document.getElementsByClassName('_cell')
      for (var i = 0; i < cells.length; i++) {
        cells[i].onmouseenter = function (event) {
          AppSvc.mouseEvent(event.target.getAttribute('id'));
        };
      }
      map.onmouseup = function () {
        document.onmousemove = null;
        for (var i = 0; i < cells.length; i++) {
          cells[i].onmouseenter = null;
        }
        map.onmouseup = null;
      }
    }

    document.getElementById('map').onclick = function (event) {
      AppSvc.mouseEvent(event.target.getAttribute('id'));
    }
  }

  static read() {
    this.keypress();
    this.uiPress();
    this.hashChange();
    this.mouseClickInCell();
    events.modalLogic.watchers();
  };
}
Events.prototype.modalLogic = {
  watchers() {
    document.getElementById("openModal").onclick = () => {
      events.modalLogic.openModal();
    }
    document.getElementById("closeModal").onclick = () => {
      events.modalLogic.closeModal();
    }
    window.onclick = (event) => {
      if (event.target == document.getElementById('modalWrapper')) {
        if (flag.get('modal mode') === 'welcome') {
          events.modalLogic.closeModal();
        }
      }
    }
  },
  openModal(nextlevel) {
    (nextlevel)
      ? view.modalContent.nextlevel()
      : view.modalContent.welcome();
    document.getElementById('modalWrapper').style.display = "flex";
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
  },
  closeModal() {
    document.getElementById('modalWrapper').style.display = "none";
    document.getElementsByTagName("html")[0].style.overflow = "auto";
  }
}
let events = new Events();