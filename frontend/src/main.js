import Vue from "vue";
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueFlashMessage from 'vue-flash-message';
Vue.use(VueFlashMessage);
import 'vue2-dropzone';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';
require('vue-flash-message/dist/vue-flash-message.min.css');
import VueLazyLoad from 'vue-lazyload'

Vue.use(Buefy);
Vue.use(VueLazyLoad);
require('dotenv').config();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
