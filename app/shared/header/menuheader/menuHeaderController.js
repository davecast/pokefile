(function(){
    angular.module('menuHeaderController', ['menuHeaderService'])

    .controller('menuHeaderController', ['$scope', 'menuHeaderFactory', '$rootScope', '$mdSidenav',
    function ($scope, menuHeaderFactory, $rootScope, $mdSidenav) {
        
        $scope.tabs = menuHeaderFactory.tabs;
        
        $scope.toggleRight = function() {
            $mdSidenav('right').toggle();
        };

        $scope.close = function() {
            $mdSidenav('right').close();
        };

        $scope.onClickTab = function(tab){
            menuHeaderFactory.onClickTab(tab);
            $rootScope.$emit('_change');
        };
        
        $scope.isActiveTab = menuHeaderFactory.isActiveTab;
    }]);

})();