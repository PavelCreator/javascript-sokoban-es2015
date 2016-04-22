<h1>JavaScript demo of skills (ES2015, Grunt, npm, OOP in prototype style)</h1>
<h3>Sokoban is a type of transport puzzle, in which the player pushes boxes or crates around in a warehouse, trying to get them to storage locations.</h3>
<h3><a href="http://melomance.net/sokoban/">Full demo</a></h3>

<img src="http://melomance.net/sokoban/dist/images/sokoban.jpg" 
alt="Online sokoban" border="10" />

<h3>Functionality:</h3>
<ul>
  <li>Online implementation of <strong>Sokoban original game</strong> (1982) with <strong>60 levels</strong></li>
  <li>The game is controlled with the <strong>keyboard</strong> or <strong>mouse</strong></li>
  <li>Completed levels and user results are <strong>stored</strong> in LocalStorage and <strong>displayed</strong> in the list of levels</li>
  <li>User can <strong>restore</strong> the last 20 steps</li>
  <li><strong>Routing</strong> is tied to levels, navigation by hash</li>
  <li>Сounting steps</li>
</ul>

<h3>Programming:</h3>
<ul>
  <li>Project written on Vanilla JS <strong>without jQuery</strong></li>
  <li>The system is collected automatically using <strong>npm</strong></li>
  <li>Auto deploy using <strong>Grunt</strong></li>
  <li>JS-OOP in <strong>prototype</strong> style</li>
  <li>9 entities, 2 controllers, 5 services and 2 storages</li>
</ul>

<h4>Prototype inheritance chains</h4>
```
Cell -> Box   -> FilledTarget
Cell -> Wall  -> Concrete
Cell -> Floor -> Target
Cell -> Floor -> User    -> UserOnTarget
```

<h4>Code examples:</h4>
```javascript
let game = Object.create(null);
Object.defineProperty(game, 'currentLevel', {
  get: function () {
    return this.currentLevelValue;
  },
  set: function (mapNum) {
    this.currentLevelValue = mapNum;
    localStorage.setItem("level", mapNum);
    MapSvc.generateMap(mapNum);
    view.lastStep.block();
    View.levelNumView(mapNum);
    View.countOfLastSteps();
  }
});
```
```javascript
(localStorage.getItem("passedLevels"))
  ? game.passedLevels = JSON.parse(localStorage.getItem("passedLevels"))
  : localStorage.setItem("passedLevels", JSON.stringify(game.passedLevels));
```
```javascript
class User extends Floor {
  constructor(x, y) {
    super(x, y);
    this.letter = '@';
    this.cssClass = 'user';
    this.setUserPosition();
    if (flag.get('user can move')) {
      this.renewView();
    }
  }
  setUserPosition() {
    game.userPos = {
      x: this.x,
      y: this.y
    };
  }
}
```
```javascript
class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  };
  getHTML() {
    let html = `<div class="_cell ${this.cssClass}" id="c${this.x}x${this.y}"></div>`;
    return html;
  };
  renewView() {
    View.renewCell(this.x,this.y,this.cssClass);
  };
}
```
```javascript
let [x,y] = coordinatesArr;
```

<h4>Grunt processing:</h4>
<ul>
  <li><strong>ES2015</strong> - collected from the files pack, minimized, unglifyed and processed with Babel</li>
  <li><strong>SCSS</strong> - conveted in CSS, minimized</li>
  <li><strong>HTML</strong> - minimised</li>
  <li><strong>Images</strong> - optimized</li>
  <li>Written <strong>watchers</strong> for separate parts and "Packs"</li>
</ul>

<h4>Deploy:</h4>
<ul>
<li>1) install all node modules. Enter in console: <strong>npm install</strong></li>
<li>2) make build. Enter in console: <strong>grunt</strong>
</ul>
