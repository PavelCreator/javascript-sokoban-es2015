class UserOnTarget extends User {
  constructor(x, y) {
    super(x, y);
    this.targetable = true;
    this.letter = 'o';
    this.cssClass = 'user_on_target';
    if (flag.get('user can move')) {
      this.renewView();
    }
  }
}