<template>
  <div class="todo">
      <h2 :class="{
          'is-completed' : todo.completed
      }">
       {{todo.title}}
       </h2>
      <div class="btn-groupe">
         <div @click="updateTodo" class="btn btn-success btn-sm"> edit </div>
         <div @click="deleteTodo" class="btn btn-danger btn-sm"> delete </div>
      </div>
  </div>
</template>

<script>
export default {
    props: ['todo'],
    methods: {
        //NB le this.todo : fais référence au Props passé
        deleteTodo() {
            this.$emit("deleteTodoEmit", this.todo.id)
        },
        updateTodo() {
            // console.log(this.todo);
             this.$emit("editTodoEmit", this.todo.id)
        }
    }
}
</script>

<style scoped>
.is-completed {
    text-decoration: line-through;
}
</style>