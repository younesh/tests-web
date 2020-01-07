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
      <div class="card-title p-3">exo saisir jusqu' un nombre entre 10 et 20</div>
      <div class="card-body">
        <p>Ecrire un algorithme qui demande un nombre compris entre 10 et 20, jusqu’à ce que la réponse convienne. En cas de réponse supérieure à 20, on fera apparaître un message : « Plus petit ! », et inversement, « Plus grand ! » si le nombre est inférieur à 10.</p>saisir un nombre entre 10 et 20
        <button
          @click="exo52"
          class="btn btn-primary"
        >louncer l'algo exo-52</button>
      </div>
    </div>
    <div class="card mb-3">
      <div class="card-title p-3">exo 5.5 : ecrire la table de multiplication d'un nombre</div>
      <div class="card-body">
        saisissez un chiffre et vous aurez sa table de multiplication en bas lol :
        <input
          type="text"
          @keyup="exo55"
          v-model="dataExo55.nbr"
        />
        <br />
        <span v-html="dataExo55.tableMultip"></span>
      </div>
    </div>

    <div class="card">
      <div class="card-title p-3">exo 5.7 : calculer le factorial d'un nombre</div>
      <div class="card-body">
        <button class="btn btn-primary" @click="exo57">lauch the scrpir 5.7</button>
      </div>
    </div>
    <div class="card">
      <div
        class="card-title p-3"
      >exo 5.8 : saisir n nombre et puis difinir le plus grand et dans quelle rond se trouve t il</div>
      <div class="card-body">
        <button class="btn btn-primary" @click="exo58">lauch the scrpir 5.8</button>
      </div>
    </div>
    <div class="card pooTest">
      <div class="card-title p-3">POO : POO en js</div>
      <div class="card-body">
        <h4> les get et set </h4> 

      </div>
    </div>

    <div class="card fetchTest">
      <div class="card-title p-3"> utiliser fetch ( le new ajax !!! lol ) </div>
      <div class="card-body" v-html="dataFetchTest"> </div>
    </div>

    <div class="card UI-effect-hover">
      <div class="card-title p-3"> test animation hover </div>
      <div class="card-body">
          <div class="card_img">
              <img src="dist/assets/logo.png" alt="">
          </div>
      </div>
    </div>

    <div class="card">
      <div class="card-title p-3"> vBind chekbox </div>
      <div class="card-body">
        <input type="checkbox" v-model="chkSucess">
        <input type="text" name="" id="" v-model="chkMessage"> {{ chkMessage }}
        <div :class="chekStatus"> message a styler par la checkbox !! </div>
      </div>
    </div>

    <div class="card boocleContinue">
      <div class="card-title p-3"> test boocle continue </div>
      <div class="card-body">
         <span>
           {{valBoocleContinue}}
         </span>
      </div>
    </div>

    <div class="card ALgoPointJointure">
      <div class="card-title p-3"> algo point de jointure de 2 nombre</div>
      <div class="card-body">
        <p>
          ennoncé : admettons une suite ds la quelle un nombre est suivi de lui même plus la somme de ces chiffre, exmple 34 est suivie de 34 + (3 + 4) cad 41 
          et 41 est suivie de 46 ... etc 

        </p>
        <div>
          <label for=""> serie 01 </label> <input type="text" v-model="APJ_s1" /><br>
           <label for=""> serie 02 </label><input type="text" v-model="APJ_s2" /> <br>
           <button class="btn btn-primary" @click="ALgoPointJointure"> calculer le point de jointure</button>

          est le point de jointure est : <strong> {{ APJ_result}}</strong> 
        </div>

      </div>
    </div>
    <!-- .card>.card-title.p-3+.card-body -->

  </div>
</template>

<script>
import { isNumber } from "util";
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
      },
      dataFetchTest: "",
      chkSucess : true,
      chkMessage : '',
      valBoocleContinue : '',

      // ALgoPointJointure
        APJ_s1 : 0,
        APJ_s2 : 0,
        APJ_result : 0
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

      while (nbr < 10 || nbr > 20) {
        // pareil si en utilisait : while ((nbr<10) || (nbr>20)) <==> while (!((nbr>=10) && (nbr<=20)))
        nbr = prompt("saisir un nbr entre 10 et 20 ");
        if (nbr < 10) {
          alert("trop petit !!! ");
        }
        if (nbr > 20) {
          alert("trop grand !!! ");
        }
        if (!isNumber(nbr * 1)) {
          alert(" c'est pas un numbre ça , faut un nombre !! ");
        }
        if (confirm(" vous vous sortir man ? ")) {
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

    exo57() {
      // le factorial
      let factorial, nbr;
      factorial = 1;
      nbr = prompt("saississez le nbr dont vous voulez son factoriel  ");
      for (let i = 1; i <= nbr; i++) {
        factorial *= i;
      }
      alert("le factorial" + nbr + " est =" + factorial);
    },
    exo58() {
      let input = [];

      for (let i = 0; i < 4; i++) {
        input = [...input, prompt("saisissez votre nombre num " + i)];
      }
      let maxValue = Math.max(...input);
      alert("la plus grande valeur saisi est " + maxValue);
      let item;
      for (item in input) {
        if (maxValue == input[item]) {
          alert("sont rong ds le table " + item);
        }
      }
    },
    algoNearZero(tab) {
      tab.forEach((item, index) => {
        console.log("log ", item + "    index : ", index);
        /* if (item == Math.min(...tab)) {
             return index;
          }; */
      });
    },
    poo() { // c'est tester qq principe de la poo en es6 .... 
      class personne {
        constructor(
          nom = "(vide)",
          prenom = "(vide)",
          dateNaissance = "(vide)"
        ) {
          this._name = nom;
          this.lastName = prenom;
          this.birdDay = dateNaissance;
        }

        sePresenter() {
          return (
            "mon nom est : " +
            this.name +
            ", prenom est " +
            this.lastName +
            ", et je suis né le " +
            this.birdDay
          );
        }

        get name() {
         //   console.log(" getter name declanchee !! " );
          return "MR " + this._name;
        }
        
        set name(nom) {
          //  alert ("vous est ds le SET et vous avez saisie " + nom);
          this._name = "Mr" + nom;
          if (nom.length > 2) {
            this._name = nom;
          }
          else{
            console.log(" oups vous avza affecter un nom trop court !!! ");
          }
        }
      }

      class personneActif extends personne {
        constructor(
          nom = "(vide)",
          prenom = "(vide)",
          dateNaissance = "(vide)"
        ) {
          super(nom, prenom, dateNaissance);
          this.secteur = "informatique ";
        }
        sePresenter() {
          return super.sePresenter() + " et  le secteur = " + this.secteur;
        }
      }

      console.log(" lancement des tests de la POO en JS : fct poo()");
      let p1 = new personne("selecon", "ahmed", "02/05/1980");
      let p2 = new personne("albiz", "khalid", "01/01/1981");
      let pa1 = new personneActif("chagir", "hatim", "02/05/1986");

      console.log(" la P1 se presnete > " + p1.sePresenter());
      console.log(" la P2 se presnete > " + p2.sePresenter());
      console.log(" la pa1 se presnete > " + pa1.sePresenter());
     console.log(p1.name);
 
     p1.name = "younes";
    },

    // consommer des api  et ou ajax 
     async fetchContentPage () { // url
       // fitch
       //   let pageList = await fetch(url)
       "https://www.senscritique.com/liste/Sorties_cinema_2019_a_voir/1704691"
        
      this.dataFetchTest = await fetch("http://fariso.net/fr/")
        
    },

     // test command continue in boocle, 
    boocleContinue () {
      for (let i=0; i<10; i++){
        if(i%2 == 0){
          continue
        }else {
          this.valBoocleContinue +=i + " - ";
        }
      }
    },
    ALgoPointJointure () {
      let s1 = Number(this.APJ_s1);
      let s2 = Number(this.APJ_s2);
      if (s1 > 0 && s2 > 0) {
        while (s1!=s2 && s1 < 20000 ) {
                // s1 
                s1=s1 + this.sumChiffreDuNbr(s1);
                s2=s2 + this.sumChiffreDuNbr(s2);
                console.log("S1 :" + s1);
                console.log("S1 :" + s2);
        }
        if (s1 == s2 ) this.APJ_result = s1;
        else this.APJ_result = "pas de jointure avant 20000 "; 
      }
    },
    sumChiffreDuNbr (nbr) {
      let chaine = nbr.toString();
      let sum = 0;
      for (let i = 0; i < chaine.length; i++ ) {
        sum += Number(chaine[i]);
      }
      return sum; 
    }

  },
  computed: {
    chekStatus :  function() { // applique une classe condistionnellment au valeur chkSucess
      console.log('chekStatus called !! ');
      return this.chkSucess ? "alert-success" : "alert-danger"
    }
  },
  created() {
    this.test01();
     this.poo();

      // https://www.senscritique.com/liste/Sorties_cinema_2019_a_voir/1704691
      this.fetchContentPage ();
      this.boocleContinue();
  }
};

/* definiyion de class */

// tools : convert jquery to vanilla 
/*
 https://tobiasahlin.com/blog/move-from-jquery-to-vanilla-javascript/
*/


// tester du js en live : https://jsfiddle.net/
</script>

<style lang="scss">
 $bgCarte : orange;
 $bgTitle: violet;
 .UI-effect-hover {
   background-color:  $bgCarte;
   .card-title 
    {
      background-color: $bgTitle;
    }
 }
</style>