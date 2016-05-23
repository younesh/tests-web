/**
 * Created by ychrak on 23/05/2016.
 */
angular.module('Main', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/m1',{ templateUrl:'partials/menu1.html'})
            .when('/m2',{ templateUrl:'partials/menu2.html'})
            .otherwise({redirectTo:'partials/p404.html'});
    });