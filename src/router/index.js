import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home'
import Music from 'components/music/music'
import Todo from 'components/Todo/Todo'


Vue.use(Router)

export default new Router({
    routes:[
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/music',
            component: Music
        },
        {
            path: '/todo',
            component: Todo
        }
    ]
})