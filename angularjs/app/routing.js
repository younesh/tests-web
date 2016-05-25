app.config(function($routeProvider){
    $routeProvider
        .when('/pdt',{ templateUrl:'partials/produits/index.html'})
        .when('/m1',{ templateUrl:'partials/menu1.html'})
        .when('/m2',{ templateUrl:'partials/menu2.html'})
        .otherwise({redirectTo:'partials/p404.html'});
})