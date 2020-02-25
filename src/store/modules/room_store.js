import {helper} from "@/utils/util";
import axios from 'axios'


export const roomStore = {
  state: {
    infoContainer: [],
    current: null
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
    }
  },
  actions: {
    async parseRoomInfo({commit, dispatch, state}, path) {
      await axios.get(path)
        .then(response => {
          commit('addRoomInfo', helper.transRoomInfo(response.data));
          commit('setCurrent', state.infoContainer.length - 1);
        })
        .catch(e => {
          dispatch('alertError', e)
        });
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
    }
  },
};
