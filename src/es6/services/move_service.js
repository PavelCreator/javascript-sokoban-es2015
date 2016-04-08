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
    console.log('analitic',print_r(pos));
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
        if (pos.prev.constructor.name == 'Target') {
          pos.prev = new Target(pos.prev.x, pos.prev.y, true);
          pos.target = new User(pos.target.x, pos.target.y);
        } else {
          if (pos.target.targetable) {
            pos.prev = new Floor(pos.prev.x, pos.prev.y);
            pos.target = new UserOnTarget(pos.target.x, pos.target.y);
          } else {
            pos.prev = new Floor(pos.prev.x, pos.prev.y);
            pos.target = new User(pos.target.x, pos.target.y);
          }
        }
        break;

      case 'move':
        if (pos.next.stepable){
          pos.prev = new Floor(pos.prev.x, pos.prev.y);
          pos.target = new User(pos.target.x, pos.target.y);
          if (pos.next.targetable){
            pos.next = new FilledTarget(pos.next.x, pos.next.y);
          }else{
            pos.next = new Box(pos.next.x, pos.next.y);
          }
        }else{
          console.log('blocked');
        }
        break;

      case 'blocked':
        break;
    }
    /*console.log('end',action,print_r(pos));*/
    /*console.log('end',emap);*/
  }
}