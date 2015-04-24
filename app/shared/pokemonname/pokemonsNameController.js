(function(){
    angular.module('pokemonsNameController', [])

    .controller('pokemonsNameController', [ 
    '$scope', '$location',
    function ($scope,  $location) {
    	
    	if($location.path() === '/pokemons'){
            $scope.typeViewName = 'pokemons';
        }else{
            $scope.typeViewName = 'pokeview';
        }
        
    }]);

})();