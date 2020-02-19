import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        num: 100,
        name: "张三",
        age: 20
    },
    //getters是把state里面的东西复制了一次
    getters: {
        count: state => {
            return state.num > 120 ? 120 : state.num
        }
    },
    //mutations里面必须是同步请求，所以此处的state会出现错乱。此处应使用action
    //action可以包含任意异步操作，action提交的是mutations，而不是直接变更状态
    mutations: {
        zizeng(state, canshu) {
            //state异步请求
            state.num += canshu.n;
            // setTimeout(() => {
            //     state.num += canshu.n
            // }, 1000)
        },
        zijian(state, canshu) {
            state.num -= canshu.n;
        }
    },
    actions: {
        Addaction(suibian) {
            console.log(suibian);
            setTimeout(() => {
                suibian.commit('zizeng', { n: 5 })
            }, 1000);
            //action里面的函数可以相互调用，用dispatch调用 
            suibian.dispatch('textaction')
        },
        textaction() {
            console.log("suibian被调用了")
        }
    }
})
export default store