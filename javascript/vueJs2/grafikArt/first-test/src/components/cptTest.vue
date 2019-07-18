<template>
  <div class="cpt-test">
    <h2>title = {{title}}</h2>
    <span>Val01 :</span>
    <span>{{val01}}</span>
    <button @click="incrementVal">click test evant</button>
  </div>
</template>

<script>
export default {
  name: "cptTest",
  props: {
    title: String,
    val01: String
    // ,value01: "c 'est la val 01 du cpt !!! ",
    // value02: "c 'est la val 02 du cpt !!! "
  },
  methods: {
    incrementVal: function() {
      this.val01 = this.val01 * 1 + 1;
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
