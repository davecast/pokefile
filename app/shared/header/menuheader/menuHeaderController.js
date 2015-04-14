(function(){
    angular.module('menuHeaderController', ['menuHeaderService'])

    .controller('menuHeaderController', ['$scope', 'menuHeaderFactory', '$rootScope',
    function ($scope, menuHeaderFactory, $rootScope) {
        
        $scope.tabs = menuHeaderFactory.tabs;
        
        $scope.onClickTab = function(tab){
            menuHeaderFactory.onClickTab(tab);
            $rootScope.$emit('_change');
        };
        
        $scope.isActiveTab = menuHeaderFactory.isActiveTab;
    }]);

})();