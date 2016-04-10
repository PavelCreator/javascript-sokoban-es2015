class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  };

  getHTML() {
    let html = `<div class="${this.cssClass}" id="c${this.x}x${this.y}"></div>`;
    return html;
  };

  renewView() {
    View.renewCell(this.x,this.y,this.cssClass);
  };
}