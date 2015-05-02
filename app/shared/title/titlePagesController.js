(function(){
    angular.module('titlePagesController', [])

    .controller('titlePagesController', [ 
    '$scope', '$location', '$routeParams',
    function ($scope,  $location, $routeParams) {
        
    	if($location.path() === '/home'){
            $scope.typeViewTitle = 'home';
        }else if($location.path() === '/pokemons'){
            $scope.typeViewTitle = 'pokemons';
        }else if($location.path() === '/contact'){
            $scope.typeViewTitle = 'contact';
        }else if($location.path() === '/'+$routeParams.type){
            $scope.typeViewTitle = 'pokemons';
        }
        
    }]);

})();