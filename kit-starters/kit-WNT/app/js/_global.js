// Global
app.global = {
  init: function() {
    // Load all global functions here
    console.log("load global functions");
    app.global.loadHeader();
    app.global.loadFooter();
    app.global.slideMainMenuMobile();
    app.global.SlideFilters();
  },

  loadHeader: function() {
    // Some specific function
    var sn = $(".sitename").text();
    console.log("loadHeader() > " + sn);
  },

  loadFooter: function() {
    console.log("loadFooter ....... ");
  },

  slideMainMenuMobile: function() {
    console.log("slideMainMenuMobile ....... ");
    mobileMenu = $(".header_main-menu.mobile-display");
    btnClose = $(".header_btn-close icon-close-white");
    btnBurger = $(".header_btn-burger");
    if (!mobileMenu.length) {
      // || !btnClose.length || !btnBurger.length
      return;
    }
    //
    console.log("slideMainMenuMobile can run now !! ");

    btnBurger.click(function() {
      mobileMenu.toggleClass("show");
      event.stopPropagation();
    });

    mobileMenu.click(function() {
      //event.stopPropagation();
    });

    btnClose.click(function() {
      mobileMenu.removeClass("show");
      console.log("test");
      // event.stopPropagation();
    });

    // retirer le menu si en click a l'exterieur
    $(document).click(function() {
      mobileMenu.removeClass("show");
    });
  },

  SlideFilters: function() {
    titleCriterea = $(".criteria .criteria_title");
    if (!titleCriterea.length) {
      return;
    }
    titleCriterea.click(function(evt) {
      $(evt.currentTarget)
        .parents(".criteria")
        .toggleClass("criteria--closed");

      //$(evt.currentTarget).find("");
    });
  }
};

// Run the global stuff
app.global.init();
