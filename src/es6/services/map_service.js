class MapSvc {

  static generateMap(mapNum) {
    document.getElementById("current_level").value = mapNum;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `src/maps/${mapNum}.txt`, true);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (this.readyState != 4) return;
      if (this.status != 200) {
        alert('error: ' + (this.status ? this.statusText : 'the request fails'));
        return;
      }

      /*Map already getted from file*/
      let map = this.responseText;
      let mapArr = map.split('\r\n');
      /*console.log(mapArr);*/
      let html = '';
      for (var y = 0; y < mapArr.length; y++) {
        html += '<div class="_row">';
        for (var x = 0; x < mapArr[y].length; x++) {
          EntitySvc.createEntity(mapArr[y][x], x, y);
          html += emap[`c${x}x${y}`].getHTML();
        }
        html += '</div>';
      }
      document.getElementById('map').innerHTML = html;
      AppSvc.runApp();
    }
  }
}