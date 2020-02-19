<template>
    <div>
        <h1>简单计算器</h1>
        <input type="button" value="+" @click="jia()" />
            <span>{{num}}</span>
        <input type="button" value="-" @click="jian()"/>

    </div>
</template>
<script>
export default {
    // data(){
    //     return{
    //         num:this.$store.state.num
    //     }
    // },
    // computed（数据同步）用来监控自己定义的变量，该变量不能在data里面声明，
    // 直接在computed里面定义，然后就可以在页面上进行双向绑定来展示结果
    // 或者对其处理或操作。
    // watch（数据监听）主要监听vue实例的变化，watch监听的变量必须在data里面定义
    // 才可以使用，watch监听的可以是一个变量也可以是一个对象
    computed:{
        num(){
            return this.$store.state.num
        }
    },
    methods:{
        jia(){
            //正常调用的函数(在页面上num值有变化而状态管理器里面不变)：this.num+=5
            // this.num+=5
            // 用commit提交的是状态管理里面mutations的函数名(这个方法
            //在状态管理里面num值变化而页面不变)：
            this.$store.commit('zizeng');
        },
        jian(){
            // this.num-=5
            this.$store.commit('zijian');
        }
    }
}
</script>
<style lang="">
div{
    text-align: center;
}
input{
    width: 60px;
    height: 30px;
}
</style>