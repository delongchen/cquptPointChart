import {helper} from "@/utils/util";
import axios from 'axios'


export const roomStore = {
  state: {
    infoContainer: []
  },
  mutations: {
    addRoomInfo(state, infos) {
      state.infoContainer.push(infos);
    }
  },
  actions: {
    parseRoomInfo({commit, dispatch}, path) {
      axios.get(path)
        .then(response => {
          commit('addRoomInfo', helper.transRoomInfo(response.data))
        })
        .catch(e => dispatch('alterError', e))
    }
  },
  getters: {
    getContainer(state) {
      return state.infoContainer;
    }
  }
};
