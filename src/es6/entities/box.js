class Box extends Cell {
  constructor(x, y, unfilled) {
    super(x, y);
    this.stepable = false;
    this.movable = true;
    this.targetable = false;
    this.cssClass = 'box';
    if (unfilled) {
      game.targetsUnfilled++;
    }
    if (flag.get('user can move')) {
      this.renewView();
    }
  }
}