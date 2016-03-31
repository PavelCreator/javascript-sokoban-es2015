class AppSvc {
  static formLetterToHtml(letter,x,y) {
    let html = '<div class="';
    switch (letter){
        case 'c':
            html += 'concrete';
        break;

        case 'w':
            html += 'wall';
        break;

        case 'e':
            html += 'floor';
        break;

        case 'p':
            html += 'place';
        break;

        case 'u':
            html += 'user';
        break;

        case 'b':
            html += 'box';
        break;
    }
    html += `" data=''></div>`;
    return html;
  }
}