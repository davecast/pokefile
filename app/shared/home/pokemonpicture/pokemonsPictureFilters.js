(function(){
    angular.module('pokemonsPictureFilters', [])

    .filter('imageGet', function(){
        return function(imput) {
            var url = 'assets/img/pokemons/' + input.toLowerCase() + 'jpg';
            return url;
        };
    });
})();