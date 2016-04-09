class MapSvc {

  static resetLevel() {
    flag.set('first step done', false);
    flag.set('user can move', false);
    game.targetsUnfilled = 0;
    game.steps = 0;
    emap = Object.create(null);
  }

  static generateCString(mapArr) {
    var cString = '';
    for (var i = 0; i < mapArr[1].length; i++) {
      cString += 'c';
    }
    mapArr.unshift(cString);
    mapArr.push(cString);
    return mapArr;
  }

  static generateMap(mapNum) {
    this.resetLevel();

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

      mapArr = MapSvc.generateCString(mapArr);

      let html = '';
      for (var y = 0; y < mapArr.length; y++) {
        html += '<div class="_row">';
        mapArr[y] = 'c' + mapArr[y] + 'c';
        for (var x = 0; x < mapArr[y].length; x++) {
          EntitySvc.createEntity(mapArr[y][x], x, y);
          console.log(emap[`c${x}x${y}`]);
          html += emap[`c${x}x${y}`].getHTML();
        }
        html += '</div>';
      }
      document.getElementById('map').innerHTML = html;
      AppSvc.runApp();
    }
  }
}