class AppSvc {

  static gameOver() {
    alert('gameOver');
    console.log('gameOver');
  }

  static runApp() {
    flag.set('user can move', true);
    Events.read();
  }
}