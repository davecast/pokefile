(function(){
    angular.module('menuHeaderDirective', [])

    .directive('dcMenuheader', function () {
        return {
            restrict: 'E',
            templateUrl: '../templates/header/menuheader/menuHeaderView.min.html'
        };
    });

})();