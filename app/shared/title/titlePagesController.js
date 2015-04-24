(function(){
    angular.module('titlePagesController', [])

    .controller('titlePagesController', [ 
    '$scope', '$location',
    function ($scope,  $location) {
    	
    	if($location.path() === '/home'){
            $scope.typeViewTitle = 'home';
            console.log($location.path());
        }else if($location.path() === '/pokemons'){
            $scope.typeViewTitle = 'pokemons';
            console.log($location.path());
        }else if($location.path() === '/contact'){
            $scope.typeViewTitle = 'contact';
            console.log($location.path());
        }else if($location.path() === '/pokemons/s'){
            console.log($location.path());
        }
        
    }]);

})();