import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import frist from '@/components/frist'
import page from '@/components/page'
import home from '@/views/home'
import tiaozhuan from '@/views/tiaozhuan'
import count from '@/views/count'


// 此处定义了一个名为User的组件，无需在组件conponents的
// 文件下新建User.vue模板，也无需在本页index.js中用impront引入
const User = {
        template: `
        <div>
            <h1>User{{$route.params.id}}</h1>
            <router-view/>
        </div>
    `
    }
    // 子组件
const Sonfrist = {
    template: `<div>我是User的第一个子组件</div>`
}
const Senfrist = {
    template: `<div>我是User的第二个子组件</div>`
}
const NotFont = {
    template: `<div><h1>404 您访问的页面不存在</h1></div>`
}

Vue.use(Router)

export default new Router({
    mode: "history",
    // 统一的class名字是nav，但行内样式work级别高
    linkActiveClass: "nav",
    routes: [
        // {
        //     path: '/',
        //     name: 'HelloWorld',
        //     component: HelloWorld
        // },
        //第一种访问index页面的方式或者/index
        {
            path: '/index',
            name: 'home',
            component: home
        },
        //第二种访问index页面的方式,redirect直接访问。注释掉路由重定向（if&else）
        {
            path: '/',
            redirect: 'index',
        },
        {
            path: '/count',
            name: 'count',
            component: count
        },
        {
            path: '/one/:class',
            name: 'fristone',
            component: frist
        },
        {
            path: '/tiaozhuan',
            name: 'tiaozhuan',
            component: tiaozhuan
        },
        {
            path: '/page',
            name: 'pageone',
            component: page
        },
        // {
        //     path: '*',
        //     component: NotFont,
        //     redirect: (to) => {
        //         console.log(to);
        //         if (to.path == '/aaa') {
        //             return '/page'
        //         } else if (to.path == '/bbb') {
        //             return 'one/BBB'
        //         } else {
        //             // 不能return*否则进入死循环
        //             return '/index'
        //         }
        //     }
        // },


        // {
        //     path: '/user/:id',
        //     name: 'User',
        //     component: User,
        //     children: [{
        //         path: 'sonone',
        //         name: 'Sonfrist',
        //         component: Sonfrist
        //     }, {
        //         path: 'sontwo',
        //         name: 'Senfrist',
        //         component: Senfrist
        //     }]
        // }

        // {
        //     path: '/user/:id',
        //     name: 'User',
        //     component: User,
        //     children: [{
        //         path: '',
        //         name: 'Sonfrist',
        //         component: Sonfrist
        //     }, {
        //         path: 'sontwo',
        //         name: 'Senfrist',
        //         component: Senfrist
        //     }]
        // }

    ]
})