class UserOnTarget extends User {
  constructor(x, y) {
    super(x, y);
    this.letter = '%';
    this.targetable = true;
    this.cssClass = 'user_on_target';
    if (flag.get('user can move')) {
      this.renewView();
    }
  }
}