import {helper} from "@/utils/util";
import axios from 'axios'


export const roomStore = {
  state: {
    infoContainer: [],
    current: null,
    grade_settings: {
      red: {variant: 'danger', show: true},
      yellow: {variant: 'warning', show: true},
      blue: {variant: 'info', show: true},
      green: {variant: 'success', show: true}
    },
  },
  mutations: {
    addRoomInfo(state, infos) {
      state.infoContainer.push(infos);
    },
    setCurrent(state, k) {
      state.current = k;
    },
    cleanContainer(state) {
      state.infoContainer = [];
      state.current = null;
    },
    showPoints(state, i) {
      state.grade_settings[i].show = true
    },
    disShowPoints(state, i) {
      state.grade_settings[i].show = false
    }
  },
  actions: {
    async parseRoomInfo({commit, state}, f) {
      const response = await axios.get('./new_data.json');
      commit('addRoomInfo', await helper.transRoomInfo(response.data));
      commit('setCurrent', state.infoContainer.length - 1);
      f();
    }
  },
  getters: {
    getContainer(state) {
      return state.infoContainer;
    },
    isContainerEmpty(state) {
      return state.infoContainer.length === 0
    },
    getCurrentObj(state) {
      return state.infoContainer[state.current];
    },
    getCurrentId(state) {
      return state.current;
    },
    grade_settings(state) {
      return state.grade_settings;
    }
  },
};
