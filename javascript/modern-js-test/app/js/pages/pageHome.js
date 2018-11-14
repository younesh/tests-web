import "slick-carousel";
export function initHomePage() {
    if (!$(".page-home").length) {
        return;
    }
    // launch the slideer 
    $(".slide-test").slick({ arrows: true });
}