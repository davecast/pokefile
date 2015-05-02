(function(){
    angular.module('pokemonsNameController', [])

    .controller('pokemonsNameController', [ 
    '$scope', '$location', '$routeParams',
    function ($scope,  $location, $routeParams) {

    	if($location.path() === '/pokemons'){
            $scope.typeViewName = 'pokemons';
        }else if($location.path() === '/'+$routeParams.type){
            $scope.typeViewName = 'pokemons';
        }else{
            $scope.typeViewName = 'pokeview';
        }
        
    }]);

})();