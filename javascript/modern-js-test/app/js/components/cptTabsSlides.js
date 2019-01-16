/** 
 * c'est un cpt qui soit sous forme de tabs soit de barres qui slide du contenu ...
 * cptTabsMenu
 * @isTabsDesktop : boolean , il est a true par défault pour dir au cpt d'activer les tabs par defaut en desktop
 * 
*/

export function initCPtTabsSlide ( isTabsDesktop = true) {

    const H_item = $(".cpt-tabs-slides .ctn-wrapper").height();
    $(".cpt-tabs-slides .item-ctn ").height(H_item);

    $(".item-nav").click(handelClickitemNav);
    
    calculeHeightItem();

    // 
    if (isTabsDesktop) {
        generateTabsMenu();
    }
}

/**
 * fct : 
*/

function handelClickitemNav(evt) {
    const currentItemNav = $(evt.currentTarget);
    currentItemNav.toggleClass("closed");
} 

function calculeHeightItem () {
    const itemCtn = $(".cpt-tabs-slides .item-ctn ");
    const wrapperHeights = $(".cpt-tabs-slides .ctn-wrapper");

    wrapperHeights.each((index, elm)=>{
        $(itemCtn[index]).height($(elm).height());
    })
}

function generateTabsMenu () {
    const  itemNav =  $(".cpt-tabs-slides .item-nav ");
    
    itemNav.each((index, elm) => {
       //  $(itemCtn[index]).height($(elm).height());
        $(".tabs-slides--nav-tabs").append("a").text(" index " + index);
    });
}