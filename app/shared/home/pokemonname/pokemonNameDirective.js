(function(){
    angular.module('pokemonNameDirective', [])

    .directive('dcPokemonname', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/home/pokemonname/pokemonNameView.min.html'
        };
    });

})();