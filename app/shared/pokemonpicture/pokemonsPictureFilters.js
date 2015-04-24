(function(){
    angular.module('pokemonsPictureFilters', [])
	.filter('imgGet', ['$filter', function($filter) {
		return function(input) {
			var url = "assets/img/pokemons/" + $filter('normalize')(input) + '.jpg';
			return url;
		};
	}]).filter('normalize', function() {
		return function(input) {
			input = input
					.replace('♀', 'f')
					.replace('♂', 'm')
					.replace(/\W+/g, '');
			return input.toLowerCase();
		};
	});
})();