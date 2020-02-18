<template>
    <div>
        <tou></tou>
        <h1>{{list}}</h1>
        我是详情页
        <!-- <jiao></jiao> -->
    </div>
</template>
<script>
import tou from '../components/header'
import jiao from '../components/footer'
export default {
     data(){
         return{
            tiaozzhuanlist:[],
            list:''
         }
     },
     components:{
        tou,
        jiao
     },
     mounted(){
         this.list=this.$route.query.aa
        //  console.log(this.$route.query.aa)
        this.$http.get('/api/w/website/findGoodsList',{
            params:{
                platId:'d0a500ecf8ab41aa9ffe8e18ac6419e1',
                info:this.list
            }
        }).then(res=>{
            console.log(res)
        })
     }
}
</script>
<style lang="">

</style>