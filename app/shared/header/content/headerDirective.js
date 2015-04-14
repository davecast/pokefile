(function(){
    angular.module('headerDirective', [])

    .directive('dcHeader', function () {
        return {
            restrict: 'E',
            templateUrl: '../templates/header/content/headerView.min.html'
        };
    });

})();