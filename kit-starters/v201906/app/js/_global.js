// Global
app.global = {
  init: function() {
    // Load all global functions here
    console.log("load global functions");
    app.global.loadHeader();
    app.global.loadFooter();
  },

  loadHeader: function() {
    // Some specific function
    var sn = $(".sitename").text();
    console.log("loadHeader() > " + sn);
  },

  loadFooter: function() {
    console.log("loadFooter ....... ");
  }
};

// Run the global stuff
app.global.init();
