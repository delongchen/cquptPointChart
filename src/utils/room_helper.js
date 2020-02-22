const color_mapping = {
  red: 'red',
  yellow: 'yellow',
  blue: 'blue',
  green: 'green'
};

const qualified = 60;

function grade_rule(size, q_ed, vy) {
  switch (q_ed) {
    case 0: return color_mapping.red;
    case size: return color_mapping.green;
    default: return color_mapping[vy >= 60 ? 'blue' : 'yellow']
  }
}

function roomInfosOf(list) {
  const roomSize = list.length;

  let
    qualifiedNum = roomSize,
    vx = 0,
    vy = 0,
    //max_x = -1,
    //max_y  = -1,
    now_x,
    now_y;

  //一趟循环尽可能搞定很多事
  for (let stu of list) {
    now_y = stu['vy'];
    now_x = stu['vx'];
    //获取最大值
    //if (now_x > max_x) max_x = now_x;
    //if (now_y > max_y) max_y = now_y;
    //及格人数counter
    if (now_y < qualified) qualifiedNum -= 1;
    //累加
    vx += now_x;
    vy += now_y;
  }

  vy = Math.floor(vy / roomSize);

  return {
    grade: grade_rule(roomSize, qualifiedNum, vy),
    vx: Math.floor(vx / roomSize),
    vy
  }
}

function Room(list, name) {
  this.list = list;
  this.name = name;
  this.infos = roomInfosOf(list);
}

export function addMoreInfosOf(serializer) {
  let
    rooms = serializer.rooms,
    max_x = -1,
    max_y = -1,
    now_x,
    now_y;

  for (let roomName in rooms) {
    if (Object.prototype.hasOwnProperty.call(rooms, roomName)) {
      let room = new Room(rooms[roomName], roomName);

      if ((now_x = room.infos.vx) > max_x) max_x = now_x;
      if ((now_y = room.infos.vy) > max_y) max_y = now_y;

      rooms[roomName] = room;
    }
  }

  serializer.max = {
    x: max_x,
    y: max_y
  }
}
