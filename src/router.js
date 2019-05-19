import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
Vue.use(Router)

export const appRouter = [
  {
    path: '/',
    meta:{
      keepAlive: true
    },
    component: resolve => {
      require(['./components/HelloFromVux'], resolve);
    }
  },
  {
    path: '/index',
    meta: {
      title: '学员页',
      keepAlive: false
    },
    component: resolve => {
      require(['./drive/index/index'], resolve);
    }
  }
]
