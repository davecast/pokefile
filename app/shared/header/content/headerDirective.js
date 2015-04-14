(function(){
    angular.module('headerDirective', ['menuHeaderDirective','menuHeaderController'])

    .directive('dcHeader', function () {
        return {
            restrict: 'E',
            controller: 'menuHeaderController',
            templateUrl: '../templates/header/content/headerView.min.html'
        };
    });

})();