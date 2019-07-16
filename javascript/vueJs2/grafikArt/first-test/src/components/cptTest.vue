<template>
  <div class="cpt-test">
    <h2>title = {{title}}</h2>
    <button @click="clicTest">click test evant</button>
  </div>
</template>

<script>
export default {
  name: "cptTest",
  props: {
    title: String
  },
  methods: {
    clicTest: function() {
      console.log("cptTest ....  ");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only  :  -->
<style scoped>
h2 {
  color: green;
}
</style>
