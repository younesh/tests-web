/** 
 * c'est un cpt qui soit sous forme de tabs soit de barres qui slide du contenu ...
 * cptTabsMenu
 * 
*/
export function initCPtTabsSlide ( isTabsDesktop = true) {
    var H_item = $(".cpt-tabs-slides .tabs-item .item-ctn .ctn-wrapper").height();
    $(".cpt-tabs-slides .tabs-item .item-ctn ").height(H_item);
} 