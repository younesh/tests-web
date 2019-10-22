<template>
<div class="todos">
  <h1>list OPcvm test  </h1>
  <form action="">
      <div class="from-group">
           <input v-model="currentTitle" type="text" class="form-control" placeholder="new todo ...">
      </div>
      <button @click.prevent="addTodo()" class="btn btn-primary btn-block btn-success mb-2 mt-2">add todo </button>
  </form>
  <ul class="list-group">
      <li class="list-group-item" v-bind:key="todo.id" v-for="todo in todos">
          <Todo :todo="todo"  @deleteTodoEmit="deleteOneTodo" />
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
            currentTitle: '', // le titre saisie ds le champ de text du from
            todos : [ ]
        }
    },
    methods : {
        addTodo () {
            if (this.currentTitle !== '') {
                let newTodo = { // objet todo temporaire pour hydrater la BD

                    title : this.currentTitle,
                    completed : false
                } 
                // ajoutant le nouveau todo a la BD
                axios.post("http://localhost:5000/todos/", newTodo)
                .then(res => {
                    // et puis en ajout a la list en front ( this.todos ) le nouveau todo ajouté ds la BD
                    this.todos = [res.data, ...this.todos]

                    // puis apres l'ajout en vide les champs
                   this.currentTitle = '';

                })
            }

        },
        getTodos() {
             axios.get("http://localhost:5000/todos")
                .then(res => this.todos = res.data)
                .catch(err => console.log("ERR object : ",err))
        },
        deleteOneTodo(id) {
            if (confirm("are you shure to delete this item ? ")){
             axios.delete("http://localhost:5000/todos/" + id)
                    .then (() => {
                        this.todos = this.todos.filter(todo => todo.id !== id);
                    })
            }
        }

    }, 
    created() { // au moment de la creation du composant avant de le rendre
       this.getTodos();
    }

}
</script>
<style>

 
</style>