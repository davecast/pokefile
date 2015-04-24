(function(){
    angular.module('pokeViewController', ['pokeViewService','commentsDirective','commentsService','pokemonNameDirective',
        'pokemonPictureDirective','pokemonTabsDirective'])

    .controller('pokeViewController', [ 
    '$scope', 'pokeViewFactory', '$location',
    function ($scope, pokeViewFactory,  $location) {
    	$scope.typeViewTitle = 'PokemonView';
    	$scope.tabs = pokeViewFactory.tab;
        $scope.pokemons = pokeViewFactory.pokemons;
        $scope.onClickTab = pokeViewFactory.onClickTab;
        $scope.isActiveTab = pokeViewFactory.isActiveTab;
        $scope.getCurrentTab = pokeViewFactory.getCurrentTab;
        
    }]).controller('commentsController', [ 
    '$scope', 'commentsFactory',
    function ($scope, commentsFactory) {
        $scope.comments = [];
        $scope.comment = {};
        $scope.show = false;

        $scope.toggle =  function(){
            $scope.show = !$scope.show;
        };

        $scope.anonymousChnged =  function(){
            if($scope.comment.anonymous){
                $scope.comment.email = "";  
            }
        };

        $scope.addComment = function(){
            $scope.comment.date = Date.now();
            $scope.comments.push($scope.comment);
            $scope.comment = {};
        };
    }]);

})();