import * as VueRouter from 'vue-router'

const routes = [
    {
        path: '/goods',
        component: () => import('../components/HomePage/Goods.vue'),
        meta:{
            keepAlive:true,
        }
    },
    {
        path: '/car',
        component: () => import('../components/HomePage/Car.vue'),
        meta:{
            keepAlive:false,
        }
    },
    {
        path: '/info',
        component: () => import('../components/HomePage/Info.vue'),
        meta:{
            keepAlive:false,
        }
    },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

export {router}