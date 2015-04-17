(function(){
    angular.module('homeController', ['homeService','commentsDirective','commentsService'])

    .controller('homeController', [ 
    '$scope', 'homeFactory',
    function ($scope, homeFactory) {
    	
    	$scope.tabs = homeFactory.tab;
        $scope.pokemons = homeFactory.pokemons;
        $scope.onClickTab = homeFactory.onClickTab;
        $scope.isActiveTab = homeFactory.isActiveTab;
        $scope.getCurrentTab = homeFactory.getCurrentTab;
      
    }]).controller('commentsController', [ 
    '$scope', 'commentsFactory',
    function ($scope, commentsFactory) {

        $scope.prueba = commentsFactory.prueba;
        console.log($scope.prueba);
    }]);

})();