import Vue from 'vue';
import lodash from 'lodash';
import VueLodash from 'vue-lodash';
import axios from 'axios';
import vuetify from '@/plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import { GET, POST, PUT, DELETE } from './assets/js/utils';

Vue.prototype.$bus = new Vue();
Vue.prototype.GET = GET;
Vue.prototype.POST = POST;
Vue.prototype.PUT = PUT;
Vue.prototype.DELETE = DELETE;
// Vue.prototype.$daumAPI = daumAPI;
Vue.config.productionTip = false;

Vue.use(VueLodash, { lodash });

axios.interceptors.request.use(
  config => {
    config.headers.Pragma = 'no-cache';
    return config;
  },
  error => Promise.reject(error)
);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
