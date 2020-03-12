import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex);

import {roomStore} from "@/store/modules/room_store";
import {errors} from "@/store/modules/errors";
import {axisStore} from "@/store/modules/axis_store";
import {lineStore} from "@/store/modules/line_store";

export const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  modules: {
    roomStore,
    errors,
    axisStore,
    lineStore,
  }
});
