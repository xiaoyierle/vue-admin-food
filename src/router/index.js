import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index.vue'
import Store from '../components/store.vue'
import Checkout from '../components/checkout.vue'
import Address from '../components/address.vue'
import newAddress from '../components/newaddress.vue'
import Descover from '../components/descover.vue'
import Order from '../components/order.vue'
import Payresult from '../components/payresult.vue'
import My from '../components/my.vue'
import Account from '../components/account.vue'
import Search from '../components/search.vue'
import Login from '../components/login.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: "/store/:id",
            name: "store",
            component: Store
        }
        ,
        {
            path: "/checkout/:id",
            name: "checkout",
            component: Checkout
        }
        ,
        {
            path: "/address/:id",
            name: "address",
            component: Address
        }
        ,
        {
            path: "/newaddress/:id",
            name: "newaddress",
            component: newAddress
        }
        ,
        {
            path: "/descover",
            name: "descover",
            component: Descover
        }
        ,
        {
            path: "/order",
            name: "order",
            component: Order
        },
        {
            path: "/payresult/:id",
            name: "payresult",
            component: Payresult
        },
        {
            path: "/my",
            name: "my",
            component: My
        },
        {
            path: "/account",
            name: "account",
            component: Account
        },
        {
            path: "/search",
            name: "search",
            component: Search
        },
        {
            path: "/login",
            name: "login",
            component: Login
        }
    ]
})
