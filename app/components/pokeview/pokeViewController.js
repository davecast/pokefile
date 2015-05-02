(function(){
    angular.module('pokeViewController', ['pokeViewService','commentsDirective','commentsService','pokemonNameDirective',
        'pokemonPictureDirective','pokemonTabsDirective'])

    .controller('pokeViewController', [ 
    '$scope', 'pokeViewFactory', '$location', '$routeParams', '$filter',
    function ($scope, pokeViewFactory,  $location, $routeParams, $filter) {

    var filtro = $filter('imgGet');
    $scope.typeViewPicture = 'individual';
    $scope.getPokemon = function(){
        pokeViewFactory.byName($routeParams.name).then(function(data){
            $scope.pokemons = data;
            $scope.pic = filtro($scope.pokemons.name);
        });
    };
    $scope.getPokemon();

	$scope.typeViewTitle = 'PokemonView';

	$scope.tabs = pokeViewFactory.tab;
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