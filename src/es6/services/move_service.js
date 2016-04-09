class MoveSvc {
  static rememberPosition(direction) {
    console.log(userPos.x, userPos.y);
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
          next: emap[`c${userPos.x + 2}x${userPos.y}`]
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
        if (pos.prev.constructor.name == 'UserOnTarget') {
          emap[`c${pos.prev.x}x${pos.prev.y}`] = new Target(pos.prev.x, pos.prev.y, true);
          emap[`c${pos.target.x}x${pos.target.y}`] = new User(pos.target.x, pos.target.y);
        } else {
          emap[`c${pos.prev.x}x${pos.prev.y}`] = new Floor(pos.prev.x, pos.prev.y);
          if (pos.target.targetable) {
            emap[`c${pos.target.x}x${pos.target.y}`] = new UserOnTarget(pos.target.x, pos.target.y);
          } else {
            emap[`c${pos.target.x}x${pos.target.y}`] = new User(pos.target.x, pos.target.y);
          }
        }
        break;

      case 'move':
        if (pos.next.stepable) {
          if (pos.prev.constructor.name == 'UserOnTarget') {
            emap[`c${pos.prev.x}x${pos.prev.y}`] = new Target(pos.prev.x, pos.prev.y, true);
          }else{
            emap[`c${pos.prev.x}x${pos.prev.y}`] = new Floor(pos.prev.x, pos.prev.y);
          }

          emap[`c${pos.target.x}x${pos.target.y}`] = new User(pos.target.x, pos.target.y);
          if (pos.next.targetable) {
            emap[`c${pos.next.x}x${pos.next.y}`] = new FilledTarget(pos.next.x, pos.next.y);
          } else {
            emap[`c${pos.next.x}x${pos.next.y}`] = new Box(pos.next.x, pos.next.y);
          }

        } else {
          console.log('blocked');
        }
        break;

      case 'blocked':
        break;
    }
    console.log(targetsUnfilled);
    /*console.log(print_r(emap.c5x3));*/
    /*console.log('end',action,print_r(pos));*/
    /*console.log('end',emap);*/
  }
}