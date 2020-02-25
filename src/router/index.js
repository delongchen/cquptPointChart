import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import RoomMain from "@/components/room_grade/RoomMain";
import RoomChart from "@/components/room_grade/RoomChart";
import RoomForm from "@/components/room_grade/RoomForm";
import RoomSelector from "@/components/room_grade/RoomSelector";

const routes = [
  {
    path: '/',
    component: RoomMain,
    children: [
      {path: '', component: RoomForm},
      {path: 'selector', component: RoomSelector},
      {path: 'chart', component: RoomChart}
    ]
  },
];

export const router = new VueRouter({
  mode: 'history',
  routes
});
