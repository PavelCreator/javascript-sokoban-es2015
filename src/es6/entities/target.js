class Target extends Floor {
  constructor(x, y, unfilled) {
    super(x, y);
    this.targetable = true;
    this.letter = 't';
    this.cssClass = 'target';
    if (!unfilled) {
      targetsUnfilled++;
    }
    if (flag.get('user can move')) {
      this.renewView();
    }
  }
}