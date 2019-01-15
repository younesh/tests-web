/** 
 * c'est un cpt qui soit sous forme de tabs soit de barres qui slide du contenu ...
 * cptTabsMenu
 * @isTabsDesktop : boolean , il est a true par défault pour dir au cpt d'activer les tabs par defaut en desktop
 * 
*/

export function initCPtTabsSlide ( isTabsDesktop = true) {

    const H_item = $(".cpt-tabs-slides .tabs-item .item-ctn .ctn-wrapper").height();
    $(".cpt-tabs-slides .tabs-item .item-ctn ").height(H_item);

    $(".item-nav").click(handelClickitemNav);
}

/**
 * fct : 
*/

function handelClickitemNav(evt) {
    console.log(" hello handelClickitemNav ");
} 