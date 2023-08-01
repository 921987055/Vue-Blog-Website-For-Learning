import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'element-ui/lib/theme-chalk/index.css' 

import AboutComponent from '@/components/AboutComponent.vue'
import PostComponent from '@/components/PostComponent.vue'
import WorkComponent from '@/components/WorkComponent.vue'
import BlogContent from '@/components/BlogContent.vue'

const router = new VueRouter({
  routes: [
    { path: '/about', component: AboutComponent },
    { path: '/works', component: WorkComponent },
    { path: '/posts', component: PostComponent },
    { path: '/blog/:blog_id', component: BlogContent }
  ]
})

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueAxios, axios)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
