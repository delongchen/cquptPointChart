import {scaleLinear} from "d3-scale";

export const axisStore = {
  state: {
    max_x: x => x,
    max_y: y => y,
    defaultHeight: 700,
    pageWidth: 1000,
    m: {
      top: 80,
      right: 20,
      bottom: 40,
      left: 22
    }
  },
  mutations: {
    setPageWidth(state, n) {
      state.pageWidth = n
    }
  },
  getters: {
    axis_x(state, getters) {
      return scaleLinear()
        .domain([0, state.max_x(getters.getCurrentObj.max.x)])
        .range([0, getters.getChartWidth])
    },
    axis_y(state, getters) {
      return scaleLinear()
        .domain([state.max_y(getters.getCurrentObj.max.y), 0])
        .rangeRound([0, getters.getChartHeight])
    },
    getChartHeight(state) {
      return state.defaultHeight - state.m.bottom - state.m.top;
    },
    getChartWidth(state) {
      return state.pageWidth - state.m.left - state.m.right;
    },
    getPageWidth(state) {
      return state.pageWidth
    },
    getPageHeight(state) {
      return state.defaultHeight
    },
    getMargin(state) {
      return state.m;
    }
  }
};
