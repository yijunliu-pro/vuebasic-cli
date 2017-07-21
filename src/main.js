// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import VueRouter from 'vue-router' //引入路由
import VueResource from 'vue-resource' //引入
import $ from 'jquery'
import App from './App'


Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource) //声明

import router1 from './components/router/router1'
import router2 from './components/router/router2'

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

// 2. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({ //创建路由实例
    mode: 'history',
    routes: [ //定义路由Define some routes
        {
            path: '/router1/:color',
            component: router1
        },
        {
            path: '/router2',
            component: router2
        }
    ]
})



new Vue({
    el: '#app',
    router, //通过 router 配置参数注入路由
    template: '<App/>',
    components: { App }
})