import { French } from "flatpickr/dist/l10n/fr";
import * as flatpickr from "flatpickr";
import "slick-carousel";

export function initDraftsPage() {
    if (!$(".page-drafts").length) {
        return;
    }
    console.log("initDraftsPage !!  loooool ");
    // test du calendar https://flatpickr.js.org/examples/
    let optional_config = {};
    $(".calendar").flatpickr(optional_config);

    // launch the slideer 
    $(".slide-test").slick({ arrows: true });

    // 


    $(".btn-01").click((elm)=>{
        let btn = $(elm.currentTarget);
        console.log("click " + btn.attr("class"));
        btn.find(".fa-cog").toggleClass('pause');
        
    })


    // open mobile menu 
    $(".btn-menu-mobile, .menu-mobile").click((evt)=>{
        let btnMenuMobile = $(evt.currentTarget);
        $(".menu-mobile").toggleClass("open");
        console.log("test menu ");
        
    });
    
}