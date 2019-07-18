<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <cptTest title="my cpt custom title lol !!! " val01="0" />3
    <br />----------- app ctn
    <br />
    <h2>title in app</h2>
    <br />
  </div>
</template>

<script>
import cptTest from "./components/cptTest.vue";

export default {
  name: "app",
  components: {
    //HelloWorld,
    cptTest
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
