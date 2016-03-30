function Events() {
  var keypress = function () {
    window.captureEvents(Event.KEYPRESS);
    window.onkeypress = pressed;
    function pressed(e) {
      var ctrlDown = e.ctrlKey || e.metaKey
      switch (e.which) {
/*        case 32:
          if (!data.flag.disableKeyEvents && data.flag.mode !== 'watch') {
            document.getElementById('hidden').focus();
            timer.startOrStop();
          }
          break;*/
      }
      console.log(e.which);
    }
  };
  var buttonPress = function () {
/*    document.getElementById("push").onclick = function () {
      timer.startOrStop();
    }
    var modes = ['timer', 'stopwatch', 'watch'];
    for (var i = 0; i < modes.length; i++) {
      document.getElementById("settings-mode-" + modes[i]).onclick = (function (x) {
        return function () {
          if (data.flag.mode !== modes[x]) {
            timer.changeMode(modes[x]);
            view.changeMode();
          }
        }
      })(i);
    }*/
  };
  var resizeEvent = function () {
    addEvent(window, "resize", function (event) {
      /*view.setMarginTop();*/
    });
  };
  this.modalLogic = {
    watchers: function () {
      document.getElementById("openModal").onclick = function () {
        events.modalLogic.openModal();
      }
      document.getElementById("closeModal").onclick = function () {
        events.modalLogic.closeModal();
      }
      window.onclick = function (event) {
        if (event.target == document.getElementById('modalWrapper')) {
          events.modalLogic.closeModal();
        }
      }
    },
    openModal: function () {
      document.getElementById('modalWrapper').style.display = "block";
      document.getElementsByTagName("html")[0].style.overflow = "hidden";
    },
    closeModal: function () {
      document.getElementById('modalWrapper').style.display = "none";
      document.getElementsByTagName("html")[0].style.overflow = "auto";
    }
  }
  this.onStart = function () {
  };
}
events = new Events();