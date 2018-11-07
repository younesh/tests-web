// styles page home
import '../styles/index.scss';

// JS 
 // import * as $ from "jquery";
import * as $$ from "jquery-selector-cache";

//slick-carousel 
import "../../node_modules/slick-carousel/slick/slick-theme.scss";
import "../../node_modules/slick-carousel/slick/slick.scss";
import "slick-carousel";

console.log('page 1:  index / home ');
$$(".slide-test").slick({ arrows: true });