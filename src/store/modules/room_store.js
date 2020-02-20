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
    parseRoomInfo({commit}, data) {
      //TODO
      // we need a function to translate data
      commit('addRoomInfo', data)
    }
  },
  getters: {
    getContainer(state) {
      return state.infoContainer;
    }
  }
};
