import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import aa from '@/components/aa'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: '/HelloWorld',
      component: HelloWorld
    },
    {
      path: '/aa',
      name: '/aa',
      component: aa
    }
  ]
});
