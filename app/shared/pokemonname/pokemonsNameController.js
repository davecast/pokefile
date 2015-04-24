(function(){
    angular.module('pokemonsNameController', [])

    .controller('pokemonsNameController', [ 
    '$scope', '$location',
    function ($scope,  $location) {
    	
    	if($location.path() === '/home'){
            $scope.typeViewName = 'home';
        }else if($location.path() === '/pokemons'){
            $scope.typeViewName = 'pokemons';
        }
        
    }]);

})();