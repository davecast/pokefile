(function(){
    angular.module('homeController', [])

    .controller('homeController', [ 
    '$scope', '$rootScope',
    function ($scope, $rootScope) {
    	
    	$rootScope.titlepage = 'Pokefile | Home';
        
        $scope.projects=[
							{
							    'name': 'Mejorandola-Pokedex',
							    'url': 'https://github.com/proyectos-mejorandola/pokedex'
							},
							{
							    'name': 'Formatcom- AngularBase',
							    'url': 'https://github.com/formatCom/baseAngularjs'
							}
		           		];
        $scope.lincenses=[
							{
							    'name': 'PokéApi',
							    'url': 'http://pokeapi.co/'
							},
							{
							    'name': 'Pokémon Database',
							    'url': 'http://pokemondb.net/'
							},
							{
							    'name': 'veekun/pokedex',
							    'url': 'https://github.com/veekun/pokedex'
							}
		           		];
    }]);

})();