<template>
    <div>
        <tou></tou>
        <div class="a">
            <div class="b" v-for="(item,index) in datalist" :key="index" >
                <img :src="item.icon" alt="" @click="tiaozhuan(item.name)">
                <h3><font>{{item.name}}</font></h3>
            </div>
        </div>
        <jiao></jiao>
    </div>
</template>
<script>
    import tou from '../components/header'
    import jiao from '../components/footer'
    export default{
        data(){
            return{
                datalist:[],
            }
        },
        components:{
            tou,
            jiao
        },
        created(){
            this.$http.get('/api/w/website/findGoodsTypeList').then(res=>{
                console.log(res);
                this.datalist=res.data.data;
            })
        },
        methods:{
            tiaozhuan(name){
                console.log(name);
                this.$router.push('/tiaozhuan?aa='+name)
            }
        }
    }
</script>
<style lang=''>
.a{
    width: 90%;
    overflow: hidden;
    margin: 30px auto;
    border: 1px solid red;
}
.b{
    width: 180px;
    height: 240px;
    margin: 20px;
    float: left;
    box-shadow: 0px 0px 5px red;
}
.b img{
    width: 100%;
    height: 180px;
}
h3{
    line-height: 20px;
}
</style>