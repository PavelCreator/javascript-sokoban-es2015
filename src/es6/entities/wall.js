class Wall extends Cell{
  constructor(x,y) {
    super(x,y);
    this.stepable = false;
    this.movable = false;
    this.targetable = false;
    this.letter = 'X';
    this.cssClass = 'wall';
  }
}