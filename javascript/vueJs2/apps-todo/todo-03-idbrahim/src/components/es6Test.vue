<template>
  <div class="container">
    <h2>testing es6 in vuej context lol ....</h2>
    <div class="card">
      <div class="card-title p-3">test 01 : portée des variable</div>
      <div class="card-body">sortie01 = {{sortie01}}</div>
    </div>

    <hr />
    <h2>une serie d'exercice algo : http://pise.info/algo/enonces5.html</h2>
    <div class="card mb-3 exo52">
      <div class="card-title p-3">exo saisir jusqu' un nombre entre 10 et 20 </div>
      <div class="card-body">
        <p>Ecrire un algorithme qui demande un nombre compris entre 10 et 20, jusqu’à ce que la réponse convienne. En cas de réponse supérieure à 20, on fera apparaître un message : « Plus petit ! », et inversement, « Plus grand ! » si le nombre est inférieur à 10.</p>saisir un nombre entre 10 et 20
        <button
          @click="exo52"
          class="btn btn-primary"
        >louncer l'algo exo-52</button>
      </div>
    </div>
    <div class="card mb-3">
      <div class="card-title p-3">exo 5.5 : ecrire la table de multiplication d'un nombre </div>
      <div class="card-body">
        saisissez un chiffre et vous aurez sa table de multiplication en bas lol :
        <input type="text" @keyup="exo55" v-model="dataExo55.nbr" />
        <br />
        <span v-html="dataExo55.tableMultip"></span>
      </div>
    </div>

    <div class="card">
      <div class="card-title p-3">exo 5.7 : calculer le factorial d'un nombre </div>
      <div class="card-body">
        <button class="btn btn-primary" @click="exo57">lauch the scrpir 5.7</button>
      </div>
    </div>
<div class="card">
    <div class="card-title p-3"> exo 5.8 : saisir n nombre et puis difinir le plus grand et dans quelle rond se trouve t il </div>
    <div class="card-body">
         <button class="btn btn-primary" @click="exo58">lauch the scrpir 5.8</button>
    </div>
</div>
    <!-- .card>.card-title.p-3+.card-body -->
  </div>
</template>

<script>
import { isNumber } from 'util';
// import axios from "axios";
export default {
  name: "es6test",
  components: {},
  data() {
    return {
      sortie01: "rien",
      dataExo55: {
        nbr: 0,
        tableMultip: "(vide)"
      }
    };
  },
  methods: {
    test01() {
      //var v01 = "lol";
      var a = "a value";
      var b = "b value";
      if (a) {
        var c = "C value";
      }
      if (b) {
        this.sortie01 = c;
      }
    },
    exo52() {
      // let nbr = 0;
      alert("lol man exo52");
      let nbr = 0;
    
      while (nbr < 10 || nbr > 20 ) {
        // pareil si en utilisait : while ((nbr<10) || (nbr>20)) <==> while (!((nbr>=10) && (nbr<=20)))
        nbr = prompt("saisir un nbr entre 10 et 20 ");
        if (nbr < 10) {
          alert("trop petit !!! ");
        }
        if (nbr > 20) {
          alert("trop grand !!! ");
        }
        if (!isNumber(nbr*1)) {
          alert(" c'est pas un numbre ça , faut un nombre !! ");
        }
        if(confirm (" vous vous sortir man ? ")){
            break;
        }
      }
      alert("Resultat de sortie" + nbr);
    },

    exo55() {
      this.dataExo55.tableMultip = "";
      for (let i = 0; i <= 10; i++) {
        this.dataExo55.tableMultip +=
          this.dataExo55.nbr +
          " x " +
          i +
          " = " +
          this.dataExo55.nbr * i +
          "<br />";
      }
    },

    exo57() { // le factorial 
        let  factorial,nbr;
        factorial =1;
        nbr = prompt("saississez le nbr dont vous voulez son factoriel  ");
        for (let i=1; i<=nbr; i++ ){
            factorial*=i
        }
        alert("le factorial" + nbr + " est =" + factorial);
    },
     exo58() {
         let input = [];

         for (let i=0; i<4; i++) {
             input =[...input, prompt("saisissez votre nombre num " + i)];
         }
         let maxValue = Math.max(...input);
          alert ("la plus grande valeur saisi est " + maxValue);
         let  item;
         for (item in input) {
             if (maxValue == input[item]) {
                 alert ("sont rong ds le table " + item);
             }
         } 
     },
     algoNearZero(tab) {
       tab.forEach((item, index)=>{
           console.log("log ", item + "    index : ", index);
          /* if (item == Math.min(...tab)) {
             return index;
          }; */ 
       })


     }
  },
  created() {
    this.test01();
  }
};
</script>

<style>
</style>