import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import Ionic from '@ionic/vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Index from '@/views/Index.vue';
import Settings from '@/views/Settings.vue';

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('index', Index);
Vue.component('settings', Settings);

Vue.config.productionTip = false;
Vue.use(Ionic);

Vue.config.ignoredElements.push(/^ion-/);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('ion-app');
