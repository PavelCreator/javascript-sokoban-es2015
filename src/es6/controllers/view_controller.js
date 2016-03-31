class View {
  onStart() {
    var map =
      `
cccwwwc/
cccwpww/
wwwweew/
wuewbbw/
wwewepw/
cweeeww/
cwwwwwc/
`
    console.log(map);
    let mapArr = map.split('/');
    let html = '';
    for (var y = 0; y < mapArr.length; y++){
      html += '<div class="row">';
      for (var x = 0; x < mapArr[y].length; x++){
        if (mapArr[y][x] == '\n') continue;
        html += AppSvc.formLetterToHtml(mapArr[y][x],x,y);
      }
      html += '</div>';
    }
    console.log(html);
    document.getElementById('map').innerHTML = html;

  };
}
view = new View();