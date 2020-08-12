<template>
  <div id="app">
    <div id="container">
      <TopPanel/>
      <Navigation/>
      <Main/>
    </div>
  </div>
</template>

<script lang="ts">
  import TopPanel from '@/components/TopPanel.vue'
  import Navigation  from '@/components/Navigation.vue'
  import Main  from '@/views/Main.vue'
  export default ({
    name: 'app',
    components: {
      TopPanel,
      Navigation,
      Main
    }
})
</script>

<style scoped lang="scss">
#app {
  font-family: 'Source Sans Pro';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#container {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
