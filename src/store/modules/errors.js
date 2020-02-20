export const errors = {
  state: {
    errored: false,
    errorInfo: ""
  },
  getters: {
    getError(state) {
      return state.errored;
    },
    getErrorInfo(state) {
      return state.errorInfo;
    }
  },
  mutations: {
    setError(state, status) {
      state.errored = status
    },
    setErrorInfo(state, info) {
      state.errorInfo = info
    }
  },
  actions: {
    alertError({commit}, info) {
      commit('setError', true);
      commit('setErrorInfo', info)
    },
    cancelErrorAlert({commit}) {
      commit('setError', false);
    }
  }
};
