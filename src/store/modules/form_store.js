import {formData} from "@/components/form/data";

export const formStore = {
  namespaced: true,
  state: {
    message: {
      name_stu: null,
      birthday: null,
      num_class: null,
      nationality: null,
      num_stu: null,
      num_college: null,
      num_major: null,
      num_gr: 2019,
      sex: null
    },
    formData
  },
  getters: {
    major(state) {
      return state.formData.major[state.message.num_college]
    }
  },
  mutations: {
    reset(state) {
      for (let i in state.message) {
        if (Object.prototype.hasOwnProperty.call(state.message, i)) {
          state.message[i] = null
        }
      }
      state.message.num_gr = 2019
    }
  }
};
