<template>
    <div>
        我是page页面
        <h1>{{$route.params.desc}}</h1>
    </div>
</template>
<script>
export default{
    data(){
        return{

        }
    },
    mounted(){
        
        console.log(this.$route.params.desc)
    }
}
</script>   
<style>

</style>