(function(){
    angular.module('pokemonsPictureFilters', [])
	.filter('imgGet', function() {
		return function(input) {
			var url = "assets/img/pokemons/" + input.toLowerCase() + '.jpg';
			return url;
		};
	}).filter('normalize', function() {
		return function(input) {
			input = input
					.replace('♀', 'f')
					.replace('♂', 'm')
					.replace(/\W+/g, '');
			return input.toLowerCase();
		};
	});
})();