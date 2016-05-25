app.controller('ProduitIndex', function($scope){
    $scope.compteur = 0;
    $scope.base = 1;
    /* test incrementation */
    $scope.incrementer = function ($cpt) {
        $scope.compteur =  $scope.compteur * 1 + $cpt * 1;
    }

})