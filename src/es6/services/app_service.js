class AppSvc {

  static gameOver() {
    alert('gameOver()');
  }

  static runApp() {
    flag.set('user can move', true);
    Events.keypress();
  }
}