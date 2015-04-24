(function(){
    angular.module('pokemonsController', ['pokemonsService','pokemonNameDirective','pokemonPictureDirective','pokemonTypeDirective'])

    .controller('pokemonsController', [ 
    '$scope', 'pokemonsFactory', '$http',
    function ($scope, pokemonsFactory, $http) {
    	$scope.pokemonsinfo = [];

    	$http.get('assets/json/pokemons.json')
            .success(function (data) {
                $scope.pokemonsinfo = data;
            });
      
    }]);
})();