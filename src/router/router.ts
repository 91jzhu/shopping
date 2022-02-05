import * as VueRouter from 'vue-router'

const routes=[
    {path:'/goods',component:()=>import('../components/HomePage/Goods.vue')},
    {path:'/car',component:()=>import('../components/HomePage/Car.vue')},
    {path:'/info',component:()=>import('../components/HomePage/Info.vue')},
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

export {router}