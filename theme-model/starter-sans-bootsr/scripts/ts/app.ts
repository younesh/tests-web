 //import {initSlider} from "../ts/_sliders"; // 
import * as $$ from "jquery-selector-cache";
import "slick-carousel";

function initSlider() {
    $$(".wrapper-slides").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        arrows: false,
        responsive: [
            {
                // breakpoint: breakpointsConfig.md.max,
                settings: {
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1
                }
            }
        ]
    });
}


 initSlider();

///alert (" test hi ");