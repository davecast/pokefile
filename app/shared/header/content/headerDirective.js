(function(){
    angular.module('headerDirective', ['menuHeaderDirective','menuHeaderController','sidenavRightDirective'])

    .directive('dcHeader', function () {
        return {
            restrict: 'E',
            controller: 'menuHeaderController',
            templateUrl: '../templates/header/content/headerView.min.html'
        };
    });

})();