class Events{
  keypress() {
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
  buttonPress() {
  };
  resizeEvent () {
    addEvent(window, "resize", function (event) {
    });
  };
  onStart () {
  };
}
events = new Events();