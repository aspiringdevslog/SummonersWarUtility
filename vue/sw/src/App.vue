<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Sample /> 
    <!-- the main thing is the component need to be within the template -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Sample from './components/Sample.vue'

// we need to import the script as well

export default {
  name: 'app',
  components: {
    HelloWorld,
    Sample
    // as well as export it as default
  }
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
</style>
