import {formData} from "@/components/form/data";

export const formStore = {
  namespaced: true,
  state: {
    message: {
      name_stu: null,
      birthday: null,
      num_class: null,
      nationality: null,
      num_stu: 2019,
      num_college: null,
      num_major: null,
      sex: null
    },
    formData
  },
  getters: {
    major(state) {
      return state.formData.major[state.message.num_college]
    }
  }
};
