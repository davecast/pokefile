(function(){
    angular.module('pokemonTabsDirective', [])

    .directive('dcPokemontabs', function () {
        return {
            restrict: 'E',
            templateUrl: '../templates/home/pokemontabs/pokemonTabsView.min.html'
        };
    });

})();