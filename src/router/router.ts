import * as VueRouter from 'vue-router'
import Front from "../Front.vue";

const routes = [
    {
        path:'/',
        component:Front
    },
    {
        path: '/goods',
        component: () => import('../components/HomePage/Goods.vue'),
        meta:{
            index:1
        }
    },
    {
        path: '/car',
        component: () => import('../components/HomePage/Car.vue'),
        meta:{
            index:2
        }
    },
    {
        path: '/info',
        component: () => import('../components/HomePage/Info.vue'),
        meta:{
            index:3
        }
    },
    {
        path: '/info/receive',
        component: () => import('../components/HomePage/Receive.vue'),
    },
    {
        path: '/info/collection',
        component: () => import('../components/HomePage/Collection.vue'),
    },
    {
        path: '/info/record',
        component: () => import('../components/HomePage/Record.vue'),
    },
    {
        path:"/:catchAll(.*)",
        redirect:'/'
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})
router.beforeEach((to,from)=>{
    const result=routes.some((url)=>url.path===to.path)
    if(!result){
        router.push('/')
    }
})

export {router}