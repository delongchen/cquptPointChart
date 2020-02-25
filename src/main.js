import Vue from 'vue'

//bootstrap
import {BootstrapVue} from "bootstrap-vue";
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//store & router
import {store} from "@/store";
import {router} from "@/router";

//main page
import App from './App.vue'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app');
