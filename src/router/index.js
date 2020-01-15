import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Common from '../views/common/Common.vue'

Vue.use(VueRouter)


const routes = [
    // 首页
    {
        path: '/',
        component: Common,
        children: [{
            path: '',
            name: 'home',
            component: Home,
        }]

    },
    {
        path: '/changecity',
        component: Common,
        children: [{
            path: '',
            name: 'changecity',
            component: () =>
                import ("../views/changecity/Changecity")
        }]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router