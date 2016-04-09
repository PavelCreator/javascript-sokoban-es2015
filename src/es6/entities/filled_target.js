class FilledTarget extends Box {
  constructor(x, y, filled) {
    super(x, y);
    this.targetable = true;
    this.cssClass = 'box_on_target';
    if (!filled) {
      game.targetsUnfilled--;
    }
    if (flag.get('user can move')) {
      this.renewView();
    }
  }
}