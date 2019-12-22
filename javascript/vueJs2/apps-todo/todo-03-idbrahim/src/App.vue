<template>
  <div id="app">
    <div class="container">
          <div id="nav">
      <router-link to="/todos">todos</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/es6Test">ES6 test</router-link> | 
      <router-link to="/sliders">sliders</router-link>
    </div>
    <router-view/>
     {{ BD }}
    </div>
  </div>
</template>

<script>
// LIB BOOTSRAP
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// COMPOSANTS INTERNE 
// import Todos from './components/Todos.vue'
const urlServiceBD = "http://localhost:5000/todos/"
export default {
  name: 'app',
  components: {
    //Todos
  },
  data() {
    return {
       BD : urlServiceBD
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
