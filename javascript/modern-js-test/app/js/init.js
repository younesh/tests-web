// plug npm packages

// components
import { initIncrementalField } from "./components/cptIncrementField";
/* pages */
import { initHomePage } from "./pages/pageHome.js";
import { initDraftsPage } from "./pages/pageDrafts";
import { initTestJsPage  } from "./pages/pageTestJs";

// les pages 
initHomePage();
initDraftsPage();
initTestJsPage();

// element : incriment field
initIncrementalField();

(function() {
    console.log('Js ready');
})();


$(document).ready(function() {
     console.log('jQuery ready 00000');
});