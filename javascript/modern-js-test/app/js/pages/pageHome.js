import "slick-carousel";
export function initHomePage() {
    if (!$(".page-home").length) {
        return;
    }
    // launch the slideer 
    console.log("initHomePage !! ");
    $(".slide-test").slick({ arrows: true });
    // slider : le test 
}