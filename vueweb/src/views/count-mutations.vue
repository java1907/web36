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
    data(){
        return{
            num:this.$store.state.num
        }
    },
    methods:{
        jia(){
            //正常调用的函数(在页面上num值有变化而状态管理器里面不变)：this.num+=5
            // this.num+=5
            //action主要是用dispatch来提交的
            //mutation主要是用commit来提交的
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