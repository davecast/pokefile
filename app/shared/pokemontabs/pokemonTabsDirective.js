(function(){
    angular.module('pokemonTabsDirective', [])

    .directive('dcPokemontabs', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/pokemontabs/pokemonTabsView.min.html'
        };
    });

})();