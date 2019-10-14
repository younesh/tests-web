<template>
  <div class="todo">
      <h2 :class="{
          'is-completed' : todo.completed
      }">
       {{todo.title}}
       </h2>
      <div class="btn-groupe">
         <div class="btn btn-success btn-sm"> edit </div>
         <div class="btn btn-danger btn-sm"> delete </div>
      </div>
  </div>
</template>

<script>
export default {
    props: ['todo']
}
</script>

<style scoped>
.is-completed {
    text-decoration: line-through;
}
</style>