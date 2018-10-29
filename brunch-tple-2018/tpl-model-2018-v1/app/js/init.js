// plug npm packages

// components
import { initIncrementalField } from "./components/cptIncrementField.js";

//pages
import { initHomePage } from "./pages/pageHome.js";
import { initDraftsPage } from "./pages/pageDrafts";


initHomePage();
initDraftsPage(); 
initIncrementalField();

(function() {
    console.log('Js ready');
})();


$(document).ready(function() {
    //  tt = require("../js/_cpt-search");
    console.log('jQuery ready');
    //  tests();
});