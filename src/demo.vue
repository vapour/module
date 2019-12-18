<template>
  <div id="app">
    <h1>组件测试页面</h1>
    <icon2 type="js"></icon2>
  </div>
</template>

<script>
import hello from 'joinf-hello'
export default {
  name: 'app',
  components: {
    icon2: hello
  }
}
</script>

<style>
html,body,#app{
  height:100%;
  margin:0;
  padding:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
