class Target extends Floor {
  constructor(x, y, unfilled) {
    super(x, y);
    this.targetable = true;
    this.cssClass = 'target';
    if (!unfilled) {
      game.targetsUnfilled++;
    }
    if (flag.get('user can move')) {
      this.renewView();
    }
  }
}