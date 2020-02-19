<template>
    <div>
        <h1>简单计算器</h1>
        <input type="button" value="+" @click="jia(3)" />
            <span>{{num}}</span>
        <input type="button" value="-" @click="jian(2)"/>
        <h1>{{name}}</h1>
        <h1>{{age}}</h1>
        {{count}}
    </div>
</template>
<script>
import {mapGetters,mapState,mapActions} from 'vuex'
export default {
    computed:{
        ...mapState({
            num(){
                return this.$store.state.num
            },
            name(){
                return this.$store.state.name
            },
            age(){
                return this.$store.state.age
            }
        }),
        ...mapGetters({
            // num2(){
            //     return this.$store.getters.count
            // }
            count:'count'
        })       
    },
    methods:{
        ...mapActions({
            caozuo:'Addaction'
        }),
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