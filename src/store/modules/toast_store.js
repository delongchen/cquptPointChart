export const toastStore = {
  namespaced: true,
  state: {
    toasts: {
      "stu-toast": {
        onShown: false,
        infos: {}
      }
    }
  },
  actions: {
  },
  getters: {
    getToastsOf: (state) => (id) => state.toasts[id]
  }
};
