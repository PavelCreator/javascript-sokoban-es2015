class Floor extends Cell{
  constructor(x,y) {
    super(x,y);
    this.stepable = true;
    this.movable = false;
    this.targetable = false;
    this.letter = ' ';
    this.cssClass = 'floor';

    if (flag.get('user can move')) {
      this.renewView();
    }
  }
}