"use strict";
// Instantiating the global app object
var app = {};
// Global
app.global = {
    init: function() {
        // Load all global functions here
        console.log("load global functions");
        app.global.slideMainMenuMobile();
        app.global.SlideFilters();
        app.global.showFilter();
        app.global.initCalendar();
        app.global.switchBtnStort();
        app.global.sliderDown();
        app.global.testsall();
    },
    /* allows to see the main menu in mobile  */
    slideMainMenuMobile: function() {
        var mobileMenu = $(".header_main-menu.mobile-display");
        var btnClose = $(".header_btn-close icon-close-white");
        var btnBurger = $(".header_btn-burger");
        if (!mobileMenu.length) {
            return;
        }
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

        // remove the menu if click outside
        $(document).click(function() {
            mobileMenu.removeClass("show");
        });
    },

    // in the FILTER block, open / close the clicked criterion
    SlideFilters: function() {
        var titleCriterea = $(".criteria .criteria_title");
        if (!titleCriterea.length) {
            return;
        }
        titleCriterea.click(function(evt) {
            $(evt.currentTarget)
                .parents(".criteria")
                .toggleClass("criteria--closed");
        });
    },

    /*  to display the filter block in mobile mode */
    showFilter: function() {
        var btnFilter = $(".button--filter");
        var btnCloseFilter = $(".filter_title > a");
        var filter = $(".filter");

        if (!btnFilter.length) {
            return;
        }

        btnFilter.click(function() {
            filter.toggleClass("filter--show");
        }); //       .bind(filter)

        btnCloseFilter.click(function() {
            filter.toggleClass("filter--show");
        });
    },

    /* initialize a calendar in the date fields that contain the '.calendar' class  */
    initCalendar: function() {
        var optional_config = {};
        $(".calendar").flatpickr(optional_config);
    },

    /* (in .data-table) :allows to change the direction of the sort btn either up or down */
    switchBtnStort: function() {
        var btnSort = $(".btn-sort");
        btnSort.click(function(evt) {
            $(evt.currentTarget).toggleClass("btn-sort--up");
        });
    },

    /* slider-down : component to slid down content  */
    sliderDown: function() {
        var sliderDownTitle = $(".slider-down_title");
        if (!sliderDownTitle.length) {
            return;
        }
        sliderDownTitle.click(function(evt) {
            $(evt.currentTarget)
                .parents(".slider-down")
                .toggleClass("slider-down--close");
        });
    },

    testsall: function() {
        var tabulator = $("#example-table");
        if (!tabulator.length) {
            return;
        }

        /* tabulator test !!!  */
        alert("test tabulator ");
        var table = new Tabulator("#example-table", {
            data: [], //load row data from array
            layout: "fitColumns", //fit columns to width of table
            responsiveLayout: "hide", //hide columns that dont fit on the table
            tooltips: true, //show tool tips on cells
            addRowPos: "top", //when adding a new row, add it to the top of the table
            history: true, //allow undo and redo actions on the table
            pagination: "local", //paginate the data
            paginationSize: 7, //allow 7 rows per page of data
            movableColumns: true, //allow column order to be changed
            resizableRows: true, //allow row order to be changed
            initialSort: [ //set the initial sort order of the data
                { column: "name", dir: "asc" },
            ],
            columns: [ //define the table columns
                { title: "Name", field: "name", editor: "input" },
                { title: "Task Progress", field: "progress", align: "left", formatter: "progress", editor: true },
                { title: "Gender", field: "gender", width: 95, editor: "select", editorParams: { values: ["male", "female"] } },
                { title: "Rating", field: "rating", formatter: "star", align: "center", width: 100, editor: true },
                { title: "Color", field: "col", width: 130, editor: "input" },
                { title: "Date Of Birth", field: "dob", width: 130, sorter: "date", align: "center" },
                { title: "Driver", field: "car", width: 90, align: "center", formatter: "tickCross", sorter: "boolean", editor: true },
            ],
        });

    }
};

// Run the global stuff
app.global.init();