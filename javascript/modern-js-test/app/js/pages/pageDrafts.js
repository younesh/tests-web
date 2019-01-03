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

    $(".btn-01").click((elm)=>{
        let btn = $(elm.currentTarget);
        console.log("click " + btn.attr("class"));
        btn.find(".fa-cog").toggleClass('pause');
    });


    // open mobile menu 
    $(".btn-menu-mobile, .menu-mobile").click((evt)=>{
        let btnMenuMobile = $(evt.currentTarget);
        $(".menu-mobile").toggleClass("open");
        console.log("test menu ");
        
    });
    
    // 
    let  options = {
        root: document.querySelector('#scrollArea'),
        rootMargin: '0px',
        threshold: 0.5
    }
    let  observer = new IntersectionObserver(callback, options);
    let target = document.querySelector('.lazyload-img');
    observer.observe(target);

    // test-lazy-load 
     lazy_loader();
     
     // generer le menu draft 
     generate_menu_draft();

     // ouvrir / fermer le menu draft 
    $(".menu-draft .btn-menu-draft").click(()=>{
        $(".menu-draft").toggleClass("close-menu-draft");
    });

     // filrer test select 
    $(".txtFilterTest").keyup(onChangeFilterTest);

    // test-chiffre-incrimentes-animes
    $('.test-chiffre-incrimentes-animes .box').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
    });

    // effet d'animation des chiffre  en js 
}

/**
 * function qui génére un menu des test dynmaiquement 
 */
function generate_menu_draft () {
    let listChaine = "";
    $("section.test").each((index, elm)=>{
        listChaine += `<a href="#${$(elm).attr("id")}">(${index+1})  ${$(elm).children("h3").text()}</a>`;
    });
    $(".menu-draft .inner-list").html(listChaine);
}
function onChangeFilterTest (evt) {
    console.log(" ok onChangeFilterTest  " + $(evt.currentTarget).val());
    const listElmContainKeyWord = $(".menu-draft .inner-list a:contains('" + $(evt.currentTarget).val() + "')");
    $(".menu-draft .inner-list a").hide();
    listElmContainKeyWord.show();

}

function callback(entries, observer) {
    entries.forEach(entry => {
        console.log("callback observer launched  000110111000111 !! ");
        // chaque élément de entries correspond à une variation
        // d'intersection pour un des éléments cible:
        //   entry.boundingClientRect
        //   entry.intersectionRatio
        //   entry.intersectionRect
        //   entry.isIntersecting
        //   entry.rootBounds
        //   entry.target
        //   entry.time
    });
};



/* codepin lazyload */ 
// Dean Hume:  https://deanhume.github.io/lazy-observer-load/

// TODO: background-images

var lazy_loader = (() => {

    "use strict";

    const dataAttr = "data-LL-src";
    const imageLoaded = "-js-lazyImageLoaded";
    const imageFadeClass = "-js-fadeIn";

    // Get all of the images that are marked up to lazy load
    const images = document.querySelectorAll("[" + dataAttr + "]");

    const config = {
        // If the image gets within 50px in the Y axis, start the download.
        //rootMargin: '50px 0px',
        rootMargin: '-50px 0px', // 50px into viewport before loading so you can see it kick in
        threshold: 0.01
    };

    let imageCount = images.length;
    let observer;

    // If we don't have support for intersection observer, loads the images immediately
    if (!('IntersectionObserver' in window)) {

        console.log("No IntersectionObserver support");
        Array.from(images).forEach(image => preloadImage(image));

    } else {
        // It is supported, load the images
        console.log("IntersectionObserver supported");
        observer = new IntersectionObserver(onIntersection, config);
        images.forEach(image => {
            if (image.classList.contains(imageLoaded)) {
                return;
            }

            observer.observe(image);
        });
    }

    // Fetch image for given URL
    function fetchImage(url) {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.src = url;
            image.onload = resolve;
            image.onerror = reject;
        });
    }

    // Preloads the image
    function preloadImage(image) {
        const src = image.getAttribute(dataAttr);
        if (!src) {
            return;
        }

        return fetchImage(src).then(() => {
            applyImage(image, src);
        });
    }

    // Load all of the images immediately
    function loadImagesImmediately(images) {
        Array.from(images).forEach(image => preloadImage(image));
    }

    // Disconnect the observer
    function disconnect() {
        if (!observer) {
            return;
        }

        observer.disconnect();
    }

    // On intersection
    function onIntersection(entries) {
        // Disconnect if we've already loaded all of the images
        if (imageCount === 0) {
            observer.disconnect();
        }

        // Loop through the entries
        entries.forEach(entry => {
            // Are we in viewport?
            if (entry.intersectionRatio > 0) {
                imageCount--;

                // Stop watching and load the image
                observer.unobserve(entry.target);
                preloadImage(entry.target);
            }
        });
    }

    // Apply the image
    function applyImage(img, src) {
        // Prevent this from being lazy loaded a second time.
        img.classList.add(imageLoaded);
        img.src = src;
        img.classList.add(imageFadeClass);
    }

});
