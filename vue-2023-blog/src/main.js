import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'element-ui/lib/theme-chalk/index.css'

const AboutComponent = () => import('@/components/AboutComponent.vue')
const PostComponent = () => import('@/components/PostComponent.vue')
const WorkComponent = () => import('@/components/WorkComponent.vue')
const BlogContent = () => import('@/components/BlogContent.vue')

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
  router,
  render: h => h(App)
}).$mount('#app')
