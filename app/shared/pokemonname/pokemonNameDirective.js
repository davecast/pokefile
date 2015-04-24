(function(){
    angular.module('pokemonNameDirective', ['pokemonsNameController'])

    .directive('dcPokemonname', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/pokemonname/pokemonNameView.min.html',
            controller: 'pokemonsNameController'
        };
    });

})();