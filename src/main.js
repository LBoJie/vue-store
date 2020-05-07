import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import './bus';
import VeeValidate from 'vee-validate';
import zhTW from 'vee-validate/dist/locale/zh_TW';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import router from './router';
import currencyFilter from './filters/currency';
import timeFormatFilter from './filters/timeFormat';

Vue.use(VueI18n);
Vue.use(VueAxios, axios);
const i18n = new VueI18n({
  locale: 'zhTW',
});
Vue.use(VeeValidate, {
  // 這是為了讓使用者離開該欄位時觸發驗證
  events: 'input|blur',
  i18n,
  dictionary: {
    zhTW,
  },
});
Vue.config.productionTip = false;
Vue.component('Loading', Loading);
Vue.filter('currency', currencyFilter);
Vue.filter('timeFormat', timeFormatFilter);
axios.defaults.withCredentials = true;
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    axios.post(api).then((response) => {
      if (response.data.success) {
        next();
      } else {
        next({ path: '/login' });
      }
    });
  } else {
    next();
  }
});

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app');
