<template>
  <div id="app">
    <div>Test vue ...</div>
    <cptTest title="my cpt custom title lol !!! " val01="0" />3
    <br />----------- app ctn
    <br />
    <h2>title in app</h2>
    <br />
    <button class="clickbtn">click btn</button>
    <span>{{var01}}</span>
  </div>
</template>

<script>
import cptTest from "./components/cptTest.vue";

export default {
  name: "app",
  data: {
    function() {
      return (var01 = "555");
    }
  },

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
