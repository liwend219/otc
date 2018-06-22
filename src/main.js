// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Home'
import Login from './components/Login'
import Wallet from './components/home/Wallet'
import Transaction from './components/home/Transaction'
import Purchase from './components/home/transaction/Purchase'
import Sellout from './components/home/transaction/Sellout'
import Tradesheet from './components/home/transaction/Tradesheet'
import Order from './components/home/transaction/Order'
import Transactionpassword from './components/Transactionpassword'
import Forgetpassword from './components/Forgetpassword'
import wellet_01 from './components/home/Wallet/Wellet_01'
import Notcomplete from './components/home/transaction/order/Notcomplete.vue'
import Ordercancel from './components/home/transaction/order/Ordercancel.vue'
import PurUSDT from './components/home/transaction/PurUSDT'
import Orderdetails from './components/home/transaction/Orderdetails'
import Authentication from './components/home/Wallet/Authentication'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home,
        children:[
            {
                path: '/wallet',
                component: Wallet,
                children:[
                   {
                   	path:'/wallet/wellet_01',
                   	component:wellet_01,
                   },
                   
                ]
            },
            {
                path:'/transaction',
                component:Transaction,
                children:[
                    {
                        path:'/transaction/purchase',
                        component:Purchase
                    },
                    {
                        path:'/transaction/sellout',
                        component:Sellout
                    },
                    {
                        path:'/transaction/tradesheet',
                        component:Tradesheet
                    },
                    // {
                    //     path:'/transaction/order',
                    //     component:Order
                    // }
                ]
            }
        ]
    },
    {
        path:'/order',
        component:Order,
        children:[
            {
                path:'/order/notcomplete',
                component:Notcomplete
            },
            {
                path:'/order/ordercancel',
                component:Ordercancel
            }
        ]
    },
                //    	path:'/wallet/authentication',
                //    	component:Authentication,
                //    },
    {
        path:'/transaction/order',
        component:Order
    },
    {
        path:'/transaction/purusdt',
        component:PurUSDT
    },
    {
        path:'/transaction/orderdetails',
        component:Orderdetails
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/Transactionpassword',
        component: Transactionpassword
    },
    {
        path: '/Forgetpassword',
        component: Forgetpassword
    },
]

const router = new VueRouter({
    routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount('#app-box')
