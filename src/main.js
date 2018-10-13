// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import { Store } from "./store";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.css";

Vue.use(Vuetify);
Vue.config.productionTip = false;

const store = new Store();
Vue.prototype.$store = store;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<v-app><App/></v-app>"
});
