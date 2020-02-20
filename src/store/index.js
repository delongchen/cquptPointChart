import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex);

import {roomStore} from "@/store/modules/room_store";
import {errors} from "@/store/modules/errors";

export const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  modules: {
    roomStore,
    errors
  }
});
