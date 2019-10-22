<template>
  <div id="app">
    <div class="container">
     <Todos />
     {{ BD }}
    </div>
  </div>
</template>

<script>
// LIB BOOTSRAP
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// COMPOSANTS INTERNE 
import Todos from './components/Todos.vue'
const urlServiceBD = "http://localhost:5000/todos/"
export default {
  name: 'app',
  components: {
    Todos
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
