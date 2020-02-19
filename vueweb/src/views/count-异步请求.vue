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
            //mutation主要是用commit来提交的
            //action主要是用dispatch来提交的
           this.$store.dispatch('Addaction')

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