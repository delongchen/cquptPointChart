function Room() {

}

export const helper = {
  transRoomInfo(stuList) {
    let ret = {};
    let rooms = {};
    let not_in_school = [];

    //classify students
    for (let stu of stuList) {
      const live = stu['live'];

      if (live === null) {
        not_in_school.push(stu);
        continue;
      }

      if (!Object.prototype.hasOwnProperty.call(rooms, live)) {
        rooms[live] = []
      }

      rooms[live].push(stu)
    }


    return ret
  }
};
