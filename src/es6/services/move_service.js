class MoveSvc {
  static rememberPosition(direction) {
    /*console.log(game.userPos.x, game.userPos.y);*/
    let pos;
    switch (direction) {
      case 'up':
        pos = {
          prev: emap[`c${game.userPos.x}x${game.userPos.y}`],
          target: emap[`c${game.userPos.x}x${game.userPos.y - 1}`],
          next: emap[`c${game.userPos.x}x${game.userPos.y - 2}`]
        }
        break;
      case 'right':
        pos = {
          prev: emap[`c${game.userPos.x}x${game.userPos.y}`],
          target: emap[`c${game.userPos.x + 1}x${game.userPos.y}`],
          next: emap[`c${game.userPos.x + 2}x${game.userPos.y}`]
        }
        break;
      case 'down':
        pos = {
          prev: emap[`c${game.userPos.x}x${game.userPos.y}`],
          target: emap[`c${game.userPos.x}x${game.userPos.y + 1}`],
          next: emap[`c${game.userPos.x}x${game.userPos.y + 2}`]
        }
        break;
      case 'left':
        pos = {
          prev: emap[`c${game.userPos.x}x${game.userPos.y}`],
          target: emap[`c${game.userPos.x - 1}x${game.userPos.y}`],
          next: emap[`c${game.userPos.x - 2}x${game.userPos.y}`]
        }
        break;
    }
    MoveSvc.analitic(pos);
  }

  static analitic(pos) {
    /*    console.log("emap =", print_r(emap));
     console.log('analitic',print_r(pos));*/
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
    /*console.log('begin',action,print_r(pos));*/
    switch (action) {
      case 'go':
        AppSvc.rememberLastStep();

        (pos.prev.constructor.name == 'UserOnTarget')
          ? emap[`c${pos.prev.x}x${pos.prev.y}`] = new Target(pos.prev.x, pos.prev.y, true)
          : emap[`c${pos.prev.x}x${pos.prev.y}`] = new Floor(pos.prev.x, pos.prev.y);

        (pos.target.targetable)
          ? emap[`c${pos.target.x}x${pos.target.y}`] = new UserOnTarget(pos.target.x, pos.target.y)
          : emap[`c${pos.target.x}x${pos.target.y}`] = new User(pos.target.x, pos.target.y);

        game.steps++;
        break;

      case 'move':
        if (pos.next.stepable) {
          AppSvc.rememberLastStep();
          (pos.prev.constructor.name == 'UserOnTarget')
            ? emap[`c${pos.prev.x}x${pos.prev.y}`] = new Target(pos.prev.x, pos.prev.y, true)
            : emap[`c${pos.prev.x}x${pos.prev.y}`] = new Floor(pos.prev.x, pos.prev.y);

          (pos.target.targetable)
            ? emap[`c${pos.target.x}x${pos.target.y}`] = new UserOnTarget(pos.target.x, pos.target.y)
            : emap[`c${pos.target.x}x${pos.target.y}`] = new User(pos.target.x, pos.target.y);
          (pos.next.targetable)
            ? (
            (pos.target.targetable)
              ? emap[`c${pos.next.x}x${pos.next.y}`] = new FilledTarget(pos.next.x, pos.next.y, true)
              : emap[`c${pos.next.x}x${pos.next.y}`] = new FilledTarget(pos.next.x, pos.next.y))
            : (
            (pos.target.targetable)
              ? emap[`c${pos.next.x}x${pos.next.y}`] = new Box(pos.next.x, pos.next.y, true)
              : emap[`c${pos.next.x}x${pos.next.y}`] = new Box(pos.next.x, pos.next.y))
          game.steps++;
        }
        break;

      case 'blocked':
        break;
    }

    /*console.log(print_r(emap.c5x3));*/
    /*console.log('end',action,print_r(pos));*/
    /*console.log('end',emap);*/
  }
}