class View {
  static levelNumView(mapNum) {
    document.getElementById("current_level").value = mapNum;
    document.getElementById("modal-level--current").innerHTML = mapNum;
    document.getElementById("modal-level--next").innerHTML = +mapNum + 1;
  }

  static renewCell(x, y, cssClass) {
    document.getElementById(`c${x}x${y}`).className = '_cell ' + cssClass;
  }

  static buildLevelList() {
    let levelList;
    let currentLevel = game.currentLevel;
    for (var i = 1; i <= 60; i++) {
      (i == currentLevel)
        ? (game.passedLevels['L' + i])
        ? levelList += `<option value="${i}" selected class="fa-select green">${i} &#xf05d; (${game.passedLevels['L' + i]})</option>`
        : levelList += `<option value="${i}" selected>${i}</option>`
        : (game.passedLevels['L' + i])
        ? levelList += `<option value="${i}" class="fa-select green">${i} &#xf05d; (${game.passedLevels['L' + i]})</option>`
        : levelList += `<option value="${i}">${i}</option>`;
    }
    document.getElementById('level-list').innerHTML = levelList;
  }

  static countOfLastSteps() {
    document.getElementById('countOfLastSteps').innerHTML = '(' + countOfOject(game.lastStep) + ')';
  }

  static restartBlockLogic() {
    if (game.steps != 0) {
      view.restart.unblock();
    } else {
      view.restart.block();
    }
  }

  static btnSuccessAnimation(id, defaultIcon) {
    classFnc.add(document.getElementById(id), 'btn-green');
    classFnc.remove(document.getElementById(id), 'btn-default');
    classFnc.add(document.getElementById(id + '-icon'), 'fa-check-circle-o');
    classFnc.remove(document.getElementById(id + '-icon'), defaultIcon);
    setTimeout(function () {
      classFnc.add(document.getElementById(id), 'btn-default');
      classFnc.remove(document.getElementById(id), 'btn-green');
      classFnc.add(document.getElementById(id + '-icon'), defaultIcon);
      classFnc.remove(document.getElementById(id + '-icon'), 'fa-check-circle-o');
    }, 1000);
  }

  static saveAnimation() {
    this.btnSuccessAnimation('save','fa-floppy-o');
  }

  static loadAnimation() {
    this.btnSuccessAnimation('load', 'fa-clipboard');
  }
}
View.prototype.modalContent = {
  welcome(){
    flag.set('modal mode', 'welcome');
    document.getElementById('closeModal').hidden = false;
    document.getElementById('modal-welcome').hidden = false;
    document.getElementById('modal-new-level').hidden = true;
  },
  nextlevel(){
    flag.set('modal mode', 'nextlevel');
    let currentLevel = game.currentLevel;
    document.getElementById('closeModal').hidden = true;
    document.getElementById('modal-welcome').hidden = true;
    document.getElementById('modal-new-level').hidden = false;
  }
}
View.prototype.lastStep = {
  block(){
    document.getElementById('undo_last_step').disabled = true;
  },
  unblock(){
    document.getElementById('undo_last_step').disabled = false;
  }
}
View.prototype.loadStep = {
  block(){
    document.getElementById('load').disabled = true;
  },
  unblock(){
    document.getElementById('load').disabled = false;
  }
}
View.prototype.restart = {
  block(){
    document.getElementById('restart').disabled = true;
  },
  unblock(){
    document.getElementById('restart').disabled = false;
  }
}
let view = new View;