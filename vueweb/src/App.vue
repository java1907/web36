<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- 有#的切换 -->
    <!-- <a href="#">首页</a>
    <a href="#/one">工作</a> -->

    <!-- 加/没有#的切换方式（index.js要加model："history"）
    <a href="/">首页</a>
    <a href="/one">工作</a> -->

    <a href="/">首页</a>
    <a href="/one">工作</a>
    <!-- 下面加的router-link跳转时不刷新网页切换（选项卡） -->
    <!-- exact点击哪个哪个变 -->
    <router-link to='/' exact>首页home</router-link>
    <!-- active-class自定义class名称 -->
    <router-link to='/one/123' active-class="work">工作work</router-link>
    <router-link to='/page' tag="li">页面page</router-link>
    <!-- name传参页面内容在name为page的page页面 -->
    <router-link :to="{name:'pageone',params:{desc:'name传参'}}" >name传参页面</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active{
  background-color: red;
}
.work{
  background-color: blue;
}
.nav{
  font-size: 30px;
  background-color: blueviolet;
}
</style>
