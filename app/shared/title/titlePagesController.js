(function(){
    angular.module('titlePagesController', [])

    .controller('titlePagesController', [ 
    '$scope', '$location',
    function ($scope,  $location) {
    	
    	if($location.path() === '/home'){
            $scope.typeViewTitle = 'home';
        }else if($location.path() === '/pokemons'){
            $scope.typeViewTitle = 'pokemons';
        }else if($location.path() === '/contact'){
            $scope.typeViewTitle = 'contact';
        }
        
    }]);

})();