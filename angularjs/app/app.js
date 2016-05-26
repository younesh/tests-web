/**
 * Created by ychrak on 14/04/2016.
 */
/**
 * Main module of the application.
 */

var app=angular.module('Main', ['ngRoute']);

/* routing de l'appli */
app.config(function($routeProvider){
    $routeProvider
        .when('/grafikart',{ templateUrl:'partials/grafikart/exemple.html'})
        .when('/pdt',{ templateUrl:'partials/produits/index.html'})
        .when('/m1',{ templateUrl:'partials/menu1.html'})
        .when('/m2',{ templateUrl:'partials/menu2.html'})
        .otherwise({templateUrl:'partials/p404.html'});
});


/* LES CONTROLLERS */
/* le controller : grafik art ->  \partials\grafikart\exemple.html  */
app.controller('GrafikartCtrl',['$scope', function($scope){
    console.log($scope);
    $scope.etat =" je suis le scope du Ctrl GrafikartCtrl 2eme version   :) !    ";
}]);