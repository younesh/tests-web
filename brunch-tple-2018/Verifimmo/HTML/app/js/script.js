$(function () {
    $("#openCloseAsideBar").on("click", function (e) {
        $(".page .middle").toggleClass("reduceAsideBar");
    });
    
    $("#openCloseZoneFilter").on("click", function (e) {
        $(".rld-zoneFilter").toggleClass("reduceZoneFilter");
    });
});