import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'

Vue.use(Router)

export const appRouter = [
    {
        path: '/',
        meta: {
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
    },
    {
        path: '/choice',
        meta: {
            title: '学员页',
            keepAlive: false
        },
        component: resolve => {
            require(['./drive/choice/choice'], resolve);
        }
    },
    {
        path: '/fashion',
        meta: {
            title: '学员页',
            keepAlive: false
        },
        component: resolve => {
            require(['./drive/choice/fashion'], resolve);
        }
    },
    {
        path: '/reliable',
        meta: {
            title: '学员页',
            keepAlive: false
        },
        component: resolve => {
            require(['./drive/choice/reliable'], resolve);
        }
    },
    {
        path: '/tech',
        meta: {
            title: '学员页',
            keepAlive: false
        },
        component: resolve => {
            require(['./drive/choice/tech'], resolve);
        }
    },
    {
        path: '/introduction',
        meta: {
            title: '学员页',
            keepAlive: false
        },
        component: resolve => {
            require(['./drive/introduction/introduction'], resolve);
        }
    },
    {
        path: '/primary',
        meta: {
            title: '学员页',
            keepAlive: false
        },
        component: resolve => {
            require(['./drive/primary/primary'], resolve);
        }
    },
    {
        path: '/secondary',
        meta: {
            title: '学员页',
            keepAlive: false
        },
        component: resolve => {
            require(['./drive/secondary/secondary'], resolve);
        }
    }

]
