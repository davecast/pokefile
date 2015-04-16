(function(){
    angular.module('homeController', ['homeService'])

    .controller('homeController', [ 
    '$scope', 'homeFactory',
    function ($scope, homeFactory) {
    	
    	$scope.tabs = homeFactory.tab;
        $scope.pokemons = homeFactory.pokemons;
        $scope.onClickTab = homeFactory.onClickTab;
        $scope.isActiveTab = homeFactory.isActiveTab;
        $scope.getCurrentTab = homeFactory.getCurrentTab;
      
    }]);

})();