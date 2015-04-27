(function(){
    angular.module('pokemonsController', ['pokemonsService','pokemonNameDirective','pokemonPictureDirective','pokemonTypeDirective'])

    .controller('pokemonsController', [ 
    '$scope', '$http', 'pokemonsFactory',
    function ($scope, $http, pokemonsFactory) {
    	$scope.typeViewPicture = 'all';
        $scope.getAllPokemons = function(){
            pokemonsFactory.all().then(function(data){
                $scope.allPokemons = data;
            });
        };
        $scope.getAllPokemons();
    }]);
})();