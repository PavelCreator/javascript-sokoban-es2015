class Box extends Cell{
  constructor(x,y) {
    super(x,y);
    this.stepable = false;
    this.movable = true;
    this.targetable = false;
    this.letter = 'b';
    this.cssClass = 'box';
  }
}