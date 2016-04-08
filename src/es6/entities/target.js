class Target extends Floor{
  constructor(x,y) {
    super(x,y);
    this.targetable = true;
    this.letter = 't';
    this.cssClass = 'target';
    targetsUnfilled++;
  }
}