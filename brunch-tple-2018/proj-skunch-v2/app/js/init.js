import { initSearch} from "./cpt-search.js";

// components
import { initIncrementalField} from "./components/cptIncrementField";



let nbr = 2441;

// calls 
initSearch(nbr);
initIncrementalField();

(function(){
    console.log('Js ready');
})();


$(document).ready(function(){
   //  tt = require("../js/_cpt-search");
    console.log('jQuery ready');
  //  tests();
});