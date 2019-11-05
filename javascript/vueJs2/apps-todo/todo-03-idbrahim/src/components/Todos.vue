<template>
<div class="todos">
    <es6Test />
    <hr>
  <h1>list OPcvm test  </h1>

      <div class="from-group">
           <input v-model="currentTitle" type="text" class="form-control" placeholder="new todo ...">
      </div>
      
      <!-- @@ affichage conditionnel des btn addtodo ou edit todo selon la valeur de  currentEditedTodo -->
      <button v-if="currentEditedTodo" @click="EditTodo" class="btn btn-primary btn-block btn-warning mb-2 mt-2">Edit todo </button>
      <button v-else @click.prevent="addTodo()" class="btn btn-primary btn-block btn-success mb-2 mt-2">add todo </button>
  <ul class="list-group">
      <li class="list-group-item" v-bind:key="todo.id" v-for="todo in todos">
          <Todo :todo="todo"  @deleteTodoEmit="deleteOneTodo" @editTodoEmit="PreEditingTodo(todo)" />
      </li>
  </ul>
  <button class="btn btn-primary"> valider </button>
  
</div>
</template>

<script>
import axios from "axios";
import Todo from "./Todo";
import es6Test from "./es6Test";
export default {
    name: "Todos",
    components: {
        Todo, es6Test
    },
    data() {
        return {
            currentTitle: '', // le titre saisie ds le champ de text du from
            currentEditedTodo :null, // on save le todo en cours de modification
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

                    // puis apres l'ajout en vide le champs text
                   this.currentTitle = '';

                })
            }

        },
        PreEditingTodo(editedTodo){
            //  preparer l'edition d'un todo ( en se position sur le todo a editer et en affichant le btn edit)
            this.currentEditedTodo = editedTodo;
            this.currentTitle = editedTodo.title;

        },
        EditTodo(){
            let editedTodo = {
                ...this.currentEditedTodo, // en recuper le todo dans notre objet local ( spreding )
                title:  this.currentTitle // en surcharge le title avec le champ text modifié
            }
            axios.put("http://localhost:5000/todos/" + editedTodo.id, editedTodo)
                .then(res =>{
                     // en modifier la list front par le update effectué ds la BD
                    this.todos = this.todos.map( itemTodo => {
                        if (res.data.id === itemTodo.id){
                            return res.data;
                        } 
                        return itemTodo;
                    })
                    this.currentTitle =''; // vider le champ text
                    this.currentEditedTodo = null; // implique l'affichage du btn "add todo" a la place de "edit todo"      
                 });
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