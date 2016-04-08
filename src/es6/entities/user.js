class User extends Floor {
  constructor(x, y) {
    super(x, y);
    this.letter = 'u';
    this.cssClass = 'user';
    this.setUserPosition();
    if (flag.get('user can move')) {
      this.renewView();
    }
  }

  setUserPosition() {
    userPos = {
      x: this.x,
      y: this.y
    };
  }
}