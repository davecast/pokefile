(function(){
    angular.module('pokemonPictureDirective', [])

    .directive('dcPokemonpicture', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/pokemonpicture/pokemonPictureView.min.html'
        };
    });

})();