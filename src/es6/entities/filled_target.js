class FilledTarget extends Box {
  constructor(x, y) {
    super(x, y);
    this.letter = 'g';
    this.cssClass = 'good';
    targetsUnfilled--;
    this.checkWin();
  }
  checkWin(){
    if (flag.get('game started')){
      if (targetsUnfilled === 0){
        AppSvc.gameOver();
      };
    }
  }
}