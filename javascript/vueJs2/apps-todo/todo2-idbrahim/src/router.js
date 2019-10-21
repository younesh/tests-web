import Vue from 'vue'
import Router from 'vue-router'
import Todos from './components/Todos.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'todos',
            component: Todos
        },
        {
            path: '/about',
            name: 'about',
            // component: About
            component: () =>  import ( /* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})