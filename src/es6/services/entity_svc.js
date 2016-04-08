class EntitySvc {
  static createEntity(letter, x, y) {
    let entity;
    switch (letter) {
      case 'c':
        entity = new Concrete(x, y);
        break;

      case 'w':
        entity = new Wall(x, y);
        break;

      case 'f':
        entity = new Floor(x, y);
        break;

      case 't':
        entity = new Target(x, y);
        break;

      case 'u':
        entity = new User(x, y);
        break;

      case 'b':
        entity = new Box(x, y);
        break;

      case 'g':
        entity = new FilledTarget(x, y);
        break;
    }
    emap[`c${x}x${y}`] = entity;
  }

  static runApp(){
    flag.set('user can move',true);
    Events.keypress();
  }
}