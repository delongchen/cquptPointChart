import {addMoreInfosOf} from "@/utils/room_helper";

export const helper = {
  transRoomInfo(stuList) {
    let rooms = {};
    let not_in_school = [];

    //classify students
    for (let stu of stuList) {
      const live = stu['live'];
      if (live === undefined) continue;
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

    let ret =  {
      title: 'ddd',
      rooms,
      not_in_school
    };
    addMoreInfosOf(ret);

    return ret;
  },
  near_max(num) {
    return (Math.floor(num / 10) + 1) * 10
  },
  near_min(num) {
    return (Math.ceil(num / 10) - 1) * 10
  }
};
