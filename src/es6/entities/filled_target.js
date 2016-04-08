class FilledTarget extends Box {
  constructor(x, y) {
    super(x, y);
    this.letter = 'g';
    this.cssClass = 'box_on_target';
    targetsUnfilled--;
    this.checkWin();
    if (flag.get('user can move')) {
      this.renewView();
    }
  }
  checkWin(){
    if (flag.get('game started')){
      if (targetsUnfilled === 0){
        AppSvc.gameOver();
      };
    }
  }
}