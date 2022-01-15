<template>
  <div id="app">
    <img alt="Vue logo" class="logo-img" src="./assets/logo/shops-512.png">
    <HelloWorld msg="Fruit Market"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* mobile */
img.logo-img {
width: 100%;
}

@media (min-width: 780px)
{
  img.logo-img {
  width: 60%;
  }
}
</style>
