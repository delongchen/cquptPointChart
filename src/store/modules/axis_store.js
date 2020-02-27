import {scaleLinear} from "d3-scale";
import {select} from 'd3-selection'
import {axisBottom, axisLeft} from "d3-axis";

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
    },
    setX(state, f) {
      state.max_x = f
    },
    setY(state, f) {
      state.max_y = f
    }
  },
  actions: {
    mount_axis_x({getters}) {
      select("#axis_x").call(axisBottom(getters.scale_x));
    },
    mount_axis_y({getters}) {
      select("axis_y").call(axisLeft(getters.scale_y))
    },
    mount_axis({dispatch}) {
      dispatch('mount_axis_x');
      dispatch('mount_axis_y');
    },
    setAxisX({commit, dispatch}, f) {
      commit('setX', f);
      dispatch('mount_axis_x');
    },
    setAxisY({commit, dispatch}, f) {
      commit('setY', f);
      dispatch('mount_axis_y')
    }
  },
  getters: {
    scale_x(state, getters) {
      return scaleLinear()
        .domain([0, state.max_x(getters.getCurrentObj.max.x)])
        .range([0, getters.getChartWidth])
    },
    scale_y(state, getters) {
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
