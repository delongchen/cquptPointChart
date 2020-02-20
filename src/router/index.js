import Vue from "vue";
import VueRouter from "vue-router";


import RoomMain from "@/components/room_grade/RoomMain";
Vue.use(VueRouter);

const routes = [
  { path: '/', component: RoomMain }
];

export const router = new VueRouter({
  routes
});
