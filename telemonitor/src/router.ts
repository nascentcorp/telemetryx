// Base dependencies
import Vue from 'vue';
import { IonicVueRouter } from '@modus/ionic-vue';
import Index from '@/views/Index.vue';
import Login from '@/views/Login.vue';
import Settings from '@/views/Settings.vue';

// Enable the ionic-vue router plugin
Vue.use(IonicVueRouter);

const args = {
  direction: 1,
  viewCount: 1,
  routes: [
  { path: '/', component: Index },
  { path: '/Login', component: Login },
  { path: '/Settings', component: Settings }
]};

export default new IonicVueRouter(args);
