<template>
<div class="todos">
  <h1>list OPcvm test  </h1>
  <ul class="list-group">
      <li class="list-group-item" v-bind:key="todo.id" v-for="todo in todos">
          <Todo :todo="todo" />
      </li>
  </ul>
  <button class="btn btn-primary"> valider </button>
</div>
</template>

<script>
import axios from "axios";
import Todo from "./Todo";
export default {
    name: "Todos",
    components: {
        Todo
    },
    data() {
        return {
            todos : [ ]
        }
    },
    methods : {
        getTodos() {
            axios.get("http://localhost:5000/todos")
                .then(res => this.todos = res.data)
                .catch(err => console.log(err))
        }
    },
    created() {
        this.getTodos();
    }

}
</script>
<style>

 
</style>