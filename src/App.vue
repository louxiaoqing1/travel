<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='less'>
@import url('./assets/initialize.less');

#app {
  height: 100%;
  width: 100%;
  min-width: 1200px;
  min-height: 700px; 
}
</style>
