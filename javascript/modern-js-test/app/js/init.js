// plug npm packages

// components
import { initIncrementalField } from "./components/cptIncrementField";
import { initRangeSlider } from "./components/cptRangeSlider";
import { initCPtTabsSlide } from "./components/cptTabsSlides";
/* pages */
import { initHomePage } from "./pages/pageHome.js";
import { initDraftsPage } from "./pages/pageDrafts";
import { initTestJsPage  } from "./pages/pageTestJs";
import {initAPIRest} from "./pages/pageAPIRest";

// les pages 
initHomePage();
initDraftsPage();
initTestJsPage();
initAPIRest();

// element : incriment field
initIncrementalField();
initRangeSlider();
initCPtTabsSlide(); 

(function() {
    console.log('Js ready');
})();


$(document).ready(function() {
     console.log('jQuery ready 00000');
});