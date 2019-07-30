"use strict";
// Instantiating the global app object
var app = {};

var tabledata = [
  {
    id: 1,
    icon: "i",
    product: "Cocol",
    penibilite: 1,
    risques: "Priorité 1 (forte)",
    cpm: "CRM (1A/B)",
    agent: "E",
    name: "Dioxyde de titane"
  },
  {
    id: 2,
    icon: "i",
    product: "SERI-BOIS BP XXX",
    penibilite: 1,
    risques: "Priorité 1 (forte)",
    cpm: "CRM (1A/B)",
    agent: "E",
    name: "Colcol colle HY-Ké2"
  },
  {
    id: 3,
    icon: "i",
    product: "Cocol",
    penibilite: 1,
    risques: "Priorité 1 (forte)",
    cpm: "CRM (1A/B)",
    agent: "E",
    name: "Diluant - nettoyant rapide"
  },
  {
    id: 4,
    icon: "i",
    product: "Laboratoire CORDELLAN",
    penibilite: 1,
    risques: "Priorité 1 (forte)",
    cpm: "CRM (1A/B)",
    agent: "E",
    name: "Fumées de soudage à l'arc sous protection gazeuse MIG"
  },
  {
    id: 5,
    icon: "i",
    product: "Cocol",
    penibilite: 1,
    risques: "Priorité 1 (forte)",
    cpm: "CRM (1A/B)",
    agent: "E",
    name: "Dégraissant fontaine"
  }
];

// Global
app.global = {
  init: function() {
    // load global app init
    console.log("load global app init");
    app.global.testsall();

    //< launch tabulator on home page : begin

    app.global.displayTabulator(".tabulator-table-container", tabledata);
    //> launch tabulator on home page : END

    //> display the sideBar :
    app.global.displaySidebar();

    app.global.closeShowSidebar();

    app.global.subNavSearch();

    // launch a test sweetart
    $(".btn-sweet-alert").click(app.global.popinSweetAlert);
  },
  /* BEGIN DECLARAION ALL FUNCTION */
  displayTabulator: function(classTabulator, dataTabulator) {
    console.log("displayTabulator lunch!!! ");

    var tabulator = $(classTabulator);
    if (!tabulator.length) {
      return;
    }
    var table = new Tabulator(classTabulator, {
      //height: 205,
      data: dataTabulator,
      layout: "fitColumns", //fit columns to width of table (optional)
      movableRows: true,
      columns: [
        //Define Table Columns
        {
          rowHandle: true,
          formatter: "handle",
          headerSort: false,
          frozen: true,
          width: 50
        },
        { title: "", field: "icon", width: 15 },
        { title: "id", field: "id", width: 20 },
        { title: "Produit (Nom commercial)", field: "name", width: 300 },
        { title: "Fabricant", field: "product", align: "left" },
        { title: "Agent", field: "agent" },
        { title: "Pénibilité", field: "penibilite" },
        { title: "Risques", field: "risques" },
        { title: "CPM", field: "cpm" }
      ]
    });

    // Pour faire ligne du tableau
    $(".tabulator-row").each(function(index) {
      var _this = $(this);
      // Au survol du cursor, ajoute une div enfant en pos absolute
      $(this).hover(function() {
        $(this).append(
          "<div class='actions-hover-row'>" +
            "<i class='actions-hover-icon ico-edit' data-value='coucou'></i>" +
            "<i class='actions-hover-icon ico-edit' data-value='uocuoc'></i>" +
            "<i class='actions-hover-icon ico-edit' data-value='salut'></i>" +
            "<i class='actions-hover-icon ico-edit' data-value='wazaaa'></i>" +
            "</div>"
        );

        // Gestion du clique sur l'enfant injecté
        $(".actions-hover-icon").each(function() {
          $(this).click(function() {
            console.log(
              _this.text() + " vous dit " + $(this).attr("data-value")
            );
          });
        });
      });

      // Enlève la div lorsque le cursor quitte l'élément
      $(this).mouseleave(function() {
        $(this)
          .children(".actions-hover-row")
          .remove();
      });
    });
  },
  displaySidebar: function() {
    /** js tree  */
    // NanoScroll
    $(".nano").nanoScroller({ sliderMaxHeight: 40 });
    $(".nano-pane, .nano-slider").css("display", "block");
    // JsTree
    $(".jstree-two").jstree({
      plugins: ["wholerow", "checkbox", "contextmenu"],
      checkbox: { keep_selected_style: false },
      core: {
        multiple: false,
        themes: { icons: false }
      }
    });

    $(".jstree-one").jstree({
      plugins: ["wholerow", "checkbox", "contextmenu"],
      checkbox: { keep_selected_style: false },
      core: {
        multiple: false,
        themes: { icons: false }
      }
    });

    /* ----------------------------------------------------- */
    /* Première sidebar */
    /* ----------------------------------------------------- */

    var titleSidebarSearchFirst = $(
      ".sub-sidebar.first .sidebar-search-content-hide"
    );
    var closeSidebarSearchFirst = $(
      ".sub-sidebar.first .sidebar-search-field-close"
    );
    var fieldSidebarSearchFirst = $(".sub-sidebar.first .sidebar-search-field");
    var inputSidebarSearchFirst = $(
      ".sub-sidebar.first .sidebar-search-field-input"
    );
    var selectionSidebarSearchFirst = $(
      ".sub-sidebar.first .sidebar-search-selection"
    );
    titleSidebarSearchFirst.click(function() {
      selectionSidebarSearchFirst.hasClass("hide")
        ? selectionSidebarSearchFirst.removeClass("hide")
        : selectionSidebarSearchFirst.addClass("hide");
    });

    closeSidebarSearchFirst.click(function() {
      fieldSidebarSearchFirst.addClass("hide");
      inputSidebarSearchFirst.val("");
    });

    $(".sub-sidebar.first .sidebar-select-all-tree").click(function() {
      $(".jstree-one").jstree("check_all");
    });

    $(".sub-sidebar.first .sidebar-unselect-all-tree").click(function() {
      $(".jstree-one").jstree("deselect_all");
    });

    /* ----------------------------------------------------- */
    /* Seconde sidebar */
    /* ----------------------------------------------------- */

    var titleSidebarSearchSeconde = $(
      ".sub-sidebar.seconde .sidebar-search-content-hide"
    );
    var closeSidebarSearchSeconde = $(
      ".sub-sidebar.seconde .sidebar-search-field-close"
    );
    var fieldSidebarSearchSeconde = $(
      ".sub-sidebar.seconde .sidebar-search-field"
    );
    var inputSidebarSearchSeconde = $(
      ".sub-sidebar.seconde .sidebar-search-field-input"
    );
    var selectionSidebarSearchSeconde = $(
      ".sub-sidebar.seconde .sidebar-search-selection"
    );

    titleSidebarSearchSeconde.click(function() {
      selectionSidebarSearchSeconde.hasClass("hide")
        ? selectionSidebarSearchSeconde.removeClass("hide")
        : selectionSidebarSearchSeconde.addClass("hide");
    });

    closeSidebarSearchSeconde.click(function() {
      fieldSidebarSearchSeconde.addClass("hide");
      inputSidebarSearchSeconde.val("");
    });

    $(".sub-sidebar.seconde .sidebar-select-all-tree").click(function() {
      $(".jstree-two").jstree("check_all");
    });

    $(".sub-sidebar.seconde .sidebar-unselect-all-tree").click(function() {
      $(".jstree-two").jstree("deselect_all");
    });
  },
  closeShowSidebar: function() {
    /** le btn qui ferme le slider ...  */
    var btnCloseSideBar = ".menu-burger-sidebar-icon";
    var mainContainerLayout = "main.main";
    if (!$(btnCloseSideBar).length) {
      return;
    }

    $(btnCloseSideBar).click(function() {
      $(mainContainerLayout).toggleClass("main--full-one-col");
      app.global.displayTabulator(".tabulator-table-container", tabledata);
    });
  },
  subNavSearch: function() {
    /* ----------------------------------------------------- */
    /* Gestion de la barre de recherche */
    /* ----------------------------------------------------- */

    var searchBar = $(".nsc-search");
    var searchBarInput = $(".nsc-search-input");
    var searchBarCross = $(".nsc-search-cross");
    var openFullSearchBar = $(".nsc-search-open-full");

    searchBarInput.click(function() {
      searchBar.css("box-shadow", "1px 1px 15px #d8dae6");
    });

    searchBarInput.focus(function() {
      console.log("selectionné");
    });

    searchBarInput.on("input", function(e) {
      if ($(this).val().length !== 0) {
        searchBarCross.removeClass("hide");
      }
    });

    searchBarCross.click(function() {
      searchBarInput.val("");
      $(this).addClass("hide");
    });

    searchBarInput.blur(function() {
      $(".nsc-search").css("box-shadow", "none");
    });
  },
  // not
  popinSweetAlert: function() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  },
  testsall: function() {}
};

// Run the global stuff
app.global.init();
