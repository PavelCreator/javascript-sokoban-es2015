class MoveSvc {
  static rememberPosition(direction) {
    let pos;
    switch (direction) {
      case 'up':
        pos = {
          prev: emap[`c${userPos.x}x${userPos.y}`],
          target: emap[`c${userPos.x}x${userPos.y - 1}`],
          next: emap[`c${userPos.x}x${userPos.y - 2}`]
        }
        break;
      case 'right':
        pos = {
          prev: emap[`c${userPos.x}x${userPos.y}`],
          target: emap[`c${userPos.x + 1}x${userPos.y}`],
          next: emap[`c${userPos.x + 1}x${userPos.y}`]
        }
        break;
      case 'down':
        pos = {
          prev: emap[`c${userPos.x}x${userPos.y}`],
          target: emap[`c${userPos.x}x${userPos.y + 1}`],
          next: emap[`c${userPos.x}x${userPos.y + 2}`]
        }
        break;
      case 'left':
        pos = {
          prev: emap[`c${userPos.x}x${userPos.y}`],
          target: emap[`c${userPos.x - 1}x${userPos.y}`],
          next: emap[`c${userPos.x - 2}x${userPos.y}`]
        }
        break;
    }
    MoveSvc.analitic(pos);
  }

  static analitic(pos) {
    if (pos.target.movable) {
      if (pos.next.stepable) {
        MoveSvc.action('move', pos)
      } else {
        MoveSvc.action('blocked', pos)
      }
    } else {
      if (pos.target.stepable) {
        MoveSvc.action('go', pos)
      } else {
        MoveSvc.action('blocked', pos)
      }
    }
  }

  static action(action, pos) {
    switch (action) {
      case 'go':
        console.log(pos);

        if (pos.target.targetable) {
          pos.prev = new Floor(pos.prev.x,pos.prev.y);
          pos.target = new UserOnTarget(pos.target.x,pos.target.y);
        } else {
          pos.prev = new Floor(pos.prev.x, pos.prev.y);
          pos.target = new User(pos.target.x, pos.target.y);
        }

        break;

      case 'move':
        console.log('move');
        break;

      case 'blocked':
        console.log('blocked');
        break;
    }

  }
}