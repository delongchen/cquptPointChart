export const lineStore = {
  state: {
    line_settings: {
      show: false,
      color: '#000',
      width: '1px',
    },
    line_info: {x: 0, y: 0, r: 0, tx: 0, ty: 0}
  },
  mutations: {
    showLines(state, status) {
      state.line_settings.show = status;
    },
    setLineInfo(state, info) {
      state.line_info = info;
    }
  },
  actions: {
    updateLinesInfo({commit, getters}, info) {
      let tx = getters['fx'](info),
        ty = getters['fy'](info),
        x = getters['scale_x'](tx),
        y = getters['scale_y'](ty);
      commit('setLineInfo', {x, y, tx, ty, r: info.r});
    }
  },
  getters: {
    line_settings(state) {
      return state.line_settings
    },
    linesInfo(state) {
      return state.line_info
    }
  }
};
