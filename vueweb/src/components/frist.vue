<template>
    <div>
        你好，星期五！疫情快点结束····
        <h1><font color="red">{{$route.params.class}}</font></h1>
    </div>
</template>
<script>
export default{
    data(){
        return {

        }
    },
    created(){
        console.log(this.$route.params.class)
    },
}
</script>   
<style>

</style>