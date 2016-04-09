class FilledTarget extends Box {
  constructor(x, y) {
    super(x, y);
    this.letter = 'g';
    this.cssClass = 'box_on_target';
    game.targetsUnfilled--;
    if (flag.get('user can move')) {
      this.renewView();
    }
  }
}