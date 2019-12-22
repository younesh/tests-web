import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Todos from '../components/Todos.vue'
import es6Test from '../components/es6Test'
import sliders from '../components/sliders'

Vue.use(VueRouter)

const routes = [{
        path: '/todos',
        name: 'Todos',
        component: Todos
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }, {
        path: '/es6Test',
        name: 'Es6',
        component: es6Test
    }, {
        path: '/sliders',
        name: 'sliders',
        component: sliders
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router