class EntitySvc {
  static createEntity(letter, x, y) {
    let entity;
    switch (letter) {
      case 'c':
        entity = new Concrete(x, y);
        break;

      case 'X':
        entity = new Wall(x, y);
        break;

      case ' ':
        entity = new Floor(x, y);
        break;

      case '.':
        entity = new Target(x, y);
        break;

      case '@':
        entity = new User(x, y);
        break;

      case '*':
        entity = new Box(x, y);
        break;

      case '&':
        entity = new FilledTarget(x, y, 'filled');
        break;
    }
    emap[`c${x}x${y}`] = entity;
  }
}