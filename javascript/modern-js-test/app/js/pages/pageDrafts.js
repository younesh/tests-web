import { French } from "flatpickr/dist/l10n/fr";
import * as flatpickr from "flatpickr";
import "slick-carousel";

export function initDraftsPage() {
    if (!$(".page-drafts").length) {
        return;
    }
    console.log("initDraftsPage !! ");
    // test du calendar https://flatpickr.js.org/examples/
    let optional_config = {};
    $(".calendar").flatpickr(optional_config);

    // launch the slideer 
    $(".slide-test").slick({ arrows: true });

    // 
    
}