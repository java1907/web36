<template>
    <div>
        <h1>简单计算器</h1>
        <input type="button" value="+" @click="jia(3)" />
            <span>{{num}}</span>
        <input type="button" value="-" @click="jian(2)"/>

    </div>
</template>
<script>
export default {
    
    computed:{
        num(){
            return this.$store.state.num
        }
    },
    methods:{
        jia(num){
            
            // this.num+=5
            //mutations的传参方法：
            //一个参数的传参方法
            // this.$store.commit('zizeng',num);
            //多个参数的传参方法一：
            // this.$store.commit('zizeng',{n:num,name:"zhangsan"});
            //多个参数的传参方法二：
            this.$store.commit({
                type:'zizeng',
                n:num,
                name:"zhangsan"
            })
        },
        jian(num){
            // this.num-=5
            this.$store.commit('zijian',{n:num,name:"lisi"});
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