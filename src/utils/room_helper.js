export const color_mapping = {
  red: '#ff3274',
  yellow: '#ffca3b',
  blue: '#42d9e5',
  green: '#8bdc54'
};

const settings = {
  qualified : 60,
  defaultR : 2,
  yWeight: 0.7,
  xWeight: 0.3
};

function grade_rule(size, q_ed, vy) {
  switch (q_ed) {
    case 0: return 'red';
    case size: return 'green';
    default: return vy >= 60 ? 'blue' : 'yellow'
  }
}

const weightOf = (x, y) =>  (settings.yWeight * y) + (settings.xWeight * x);

function roomInfosOf(list) {
  const roomSize = list.length;

  let
    qualifiedNum = roomSize,
    stu,
    grade,
    vx = 0,
    vy = 0,
    now_x,
    now_y;

  for (let i = 0; i < roomSize; i++) {
    stu = list[i];
    now_y = stu['vy'];
    now_x = stu['vx'];

    if ((stu.gua = (weightOf(now_x, now_y) < settings.qualified))) qualifiedNum -= 1;
    //counter
    vx += now_x;
    vy += now_y;
  }

  vy = Math.floor(vy / roomSize);
  grade = grade_rule(roomSize, qualifiedNum, vy);

  //对应room.infos
  return {
    grade,//等级 即颜色
    color: color_mapping[grade],
    r: Math.sqrt(Math.pow(roomSize, 3)) + settings.defaultR,// 圆点半径
    vx: Math.floor(vx / roomSize),
    vy
  }
}

function Room(list, name) {
  this.list = list;
  this.name = name;
  this.infos = roomInfosOf(list);
}

export function addMoreInfosOf(who) {
  let
    ret = [],
    tmp = who.rooms,
    max_x = -1,
    max_y = -1,
    now_x,
    now_y;

  for (let roomName in tmp) {
    if (Object.prototype.hasOwnProperty.call(tmp, roomName)) {
      let room = new Room(tmp[roomName], roomName);

      if ((now_x = room.infos.vx) > max_x) max_x = now_x;
      if ((now_y = room.infos.vy) > max_y) max_y = now_y;

      ret.push(room)
    }
  }

  who.rooms = ret;
  who.max = {
    x: max_x,
    y: max_y
  };
}
