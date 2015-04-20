(function(){
    angular.module('pokemonPictureDirective', [])

    .directive('dcPokemonpicture', function () {
        return {
            restrict: 'E',
            templateUrl: '../templates/home/pokemonpicture/pokemonPictureView.min.html'
        };
    });

})();