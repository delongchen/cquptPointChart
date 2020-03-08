import {scaleLinear} from "d3-scale";
import {select} from 'd3-selection'
import {axisBottom, axisLeft} from "d3-axis";
import {helper} from "@/utils/util";
import {chartToolSet} from "@/chart/toolbar";

export const axisStore = {
  state: {
    defaultHeight: 700,
    pageWidth: 1000,
    m: {
      top: 80,
      right: 20,
      bottom: 40,
      left: 26
    },
    axis_info: chartToolSet,
    current_axis: 0
  },
  mutations: {
    setPageWidth(state, n) {
      state.pageWidth = n
    },
    setCurrentAxis(state, n) {
      state.current_axis = n;
    }
  },
  actions: {
    mount_axis_x({getters}) {
      select("#axis_x").call(axisBottom(getters.scale_x));
    },
    mount_axis_y({getters}) {
      select("#axis_y").call(axisLeft(getters.scale_y).ticks(7))
    },
    setNowWidth({commit, dispatch}, n) {
      commit('setPageWidth', n);
      dispatch('mount_axis_x')
    },
    setCurrentAxis({commit, dispatch}, n) {
      commit('setCurrentAxis', n);
      dispatch('mount_axis_x');
      dispatch('mount_axis_y');
    }
  },
  getters: {
    scale_x(state, getters) {
      return scaleLinear()
        .domain([
          helper.near_min(getters.fx(getters.getCurrentObj.min)),
          helper.near_max(getters.fx(getters.getCurrentObj.max))
        ])
        .range([0, getters.getChartWidth])
    },
    scale_y(state, getters) {
      return scaleLinear()
        .domain([
          helper.near_max(getters.fy(getters.getCurrentObj.max)),
          helper.near_min(getters.fy(getters.getCurrentObj.min))
        ])
        .rangeRound([0, getters.getChartHeight])
    },
    fx(state) {
      return state.axis_info[state.current_axis].x.f
    },
    fy(state) {
      return state.axis_info[state.current_axis].y.f
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
    },
    getCurrentAxis(state) {
      return state.axis_info[state.current_axis]
    },
    getAxisInfos(state) {
      return {
        li: state.axis_info,
        n: state.current_axis
      }
    }
  }
};
