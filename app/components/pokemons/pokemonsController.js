(function(){
    angular.module('pokemonsController', ['pokemonsService','pokemonNameDirective','pokemonPictureDirective','pokemonTypeDirective'])

    .controller('pokemonsController', [ 
    '$scope', '$http', 'pokemonsFactory', '$routeParams',
    function ($scope, $http, pokemonsFactory, $routeParams) {
    	$scope.typeViewPicture = 'all';

        var type = $routeParams.type;

        if(type){
            $scope.getTypePokemons = function(type){
                pokemonsFactory.byType(type).then(function(data){
                    $scope.allPokemons = data;
                });
            };
            $scope.getTypePokemons(type); 
        }else {
            $scope.getAllPokemons = function(){
                pokemonsFactory.all().then(function(data){
                    $scope.allPokemons = data;
                });
            };
            $scope.getAllPokemons();
        }

        
    }]);
})();