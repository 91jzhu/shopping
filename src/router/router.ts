import * as VueRouter from 'vue-router'
import Front from "../Front.vue";
import Goods from "../components/HomePage/Goods.vue";
import Car from "../components/HomePage/Car.vue";
import Info from "../components/HomePage/Info.vue";
import Receive from "../components/HomePage/Receive.vue";
import Collection from "../components/HomePage/Collection.vue";
import Record from "../components/HomePage/Record.vue";

const routes = [
    {
        path: '/',
        component: Front
    },
    {
        path: '/goods',
        component: Goods,
        meta: {
            index: 1
        }
    },
    {
        path: '/car',
        component: Car,
        meta: {
            index: 2
        }
    },
    {
        path: '/info',
        component: Info,
        meta: {
            index: 3
        }
    },
    {
        path: '/info/receive',
        component: Receive,
    },
    {
        path: '/info/collection',
        component: Collection,
    },
    {
        path: '/info/record',
        component: Record,
    },
    {
        path: "/:catchAll(.*)",
        redirect: '/'
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})
router.beforeEach((to, from) => {
    const result = routes.some((url) => url.path === to.path)
    if (!result) {
        router.push('/')
    }
})

export {router}