(function(){
    angular.module('pokemonTypeDirective', [])

    .directive('dcPokemontype', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/pokemontype/pokemonTypeView.min.html'
        };
    });

})();