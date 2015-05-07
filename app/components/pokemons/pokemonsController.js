(function(){
    angular.module('pokemonsController', ['pokemonsService','pokemonNameDirective','pokemonPictureDirective','pokemonTypeDirective','searchDirective'])

    .controller('pokemonsController', [ 
    '$scope', '$http', 'pokemonsFactory', '$routeParams', '$rootScope',
    function ($scope, $http, pokemonsFactory, $routeParams, $rootScope) {
    	$scope.typeViewPicture = 'all';
        $scope.allPokemons = [];

        $scope.type = $routeParams.type;
        
        if($scope.type){
            $rootScope.titlepage = 'Pokefile | '+$scope.type;
            $scope.getTypePokemons = function(type){
                pokemonsFactory.byType(type).then(function(data){
                    $scope.allPokemons = data;
                });
            };
            $scope.getTypePokemons($scope.type); 
        }else {
            $rootScope.titlepage = 'Pokefile | Pokemons';
            $scope.getAllPokemons = function(){
                pokemonsFactory.all().then(function(data){
                    $scope.allPokemons = data;
                });
            };
            $scope.getAllPokemons();
        }

        
    }]);
})();