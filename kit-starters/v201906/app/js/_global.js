// Global
"use strict";
app.global = {
  init: function() {
    // Load all global functions here
    console.log("load global functions");
    app.global.loadHeader();
    app.global.loadFooter();
    app.global.lecteurDataIcon();
    app.global.parallax();
  },

  loadHeader: function() {
    // Some specific function
    var sn = $(".sitename").text();
    console.log("loadHeader() > " + sn);
  },
  loadFooter: function() {
    console.log("loadFooter ....... ");
  },

  lecteurDataIcon: function() {},
  parallax: function() {
    var paralax = $(".parallax");
    window.addEventListener("scroll", function() {
      var offset = window.pageYOffset;
      //  paralax.style.backgroundPositionY = offset * 0.5 + "px";
      paralax.css("background-position-y", offset * 0.7 + "px");
      //  console.log(offset);

      var images = document.querySelectorAll("img.parallax-img");
      new simpleParallax(images, {
        delay: 1,
        orientation: "down",
        scale: 2,
        overfow: true
      });
    });
  }
};

// Run the global stuff
app.global.init();
