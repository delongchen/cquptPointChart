const qualified = 60;

const color_mapping = {
  red: 'red',
  yellow: 'yellow',
  blue: 'blue',
  green: 'green'
};

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
    tmp;

  for (let stu of list) {
    if ((tmp = stu['vy']) < qualified) qualifiedNum -= 1;
    vx += stu['vx'];
    vy += tmp;
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

export const helper = {
  transRoomInfo(stuList) {
    let rooms = {};
    let not_in_school = [];

    //classify students
    for (let stu of stuList) {
      const live = stu['live'];
      delete stu['live'];

      if (live === null) {
        not_in_school.push(stu);
        continue;
      }

      if (!Object.prototype.hasOwnProperty.call(rooms, live)) {
        rooms[live] = []
      }

      rooms[live].push(stu)
    }

    for (let roomName in rooms) {
      rooms[roomName] = new Room(rooms[roomName], roomName)
    }

    return {
      title: 'ddd',
      rooms,
      not_in_school
    }
  }
};
