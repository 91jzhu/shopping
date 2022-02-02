import * as VueRouter from 'vue-router'

const routes=[
    {path:'/goods',component:()=>import('../components/Goods.vue')},
    {path:'/car',component:()=>import('../components/Car.vue')},
    {path:'/info',component:()=>import('../components/Info.vue')},
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

export {router}