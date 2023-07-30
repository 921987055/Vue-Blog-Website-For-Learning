import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css' 

import AboutComponent from '@/components/AboutComponent.vue'
import PostComponent from '@/components/PostComponent.vue'
import WorkComponent from '@/components/WorkComponent.vue'

const router = new VueRouter({
  routes: [
    { path: '/about', component: AboutComponent },
    { path: '/works', component: WorkComponent },
    { path: '/posts', component: PostComponent }
  ]
})

Vue.use(ElementUI)
Vue.use(VueRouter)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
