import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from './components/index.vue';

Vue.use (VueRouter);

const router = new VueRouter({
    hashbang: false,
    history: true,
    suppressTransitionError: false,
    routes: [
      { path: '/', component: Index }
    ]
  });
  
  // default route
  router.replace ('/loading');
  
  // share environment configuration
  util.set ('envConfig', envConfig);
  
  window.explorer = new Vue({
    router
  }).$mount('#explorer');