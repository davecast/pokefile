(function(){
    angular.module('sidenavRightDirective', [])

    .directive('dcSidenavright', function () {
        return {
            restrict: 'E',
            templateUrl: '../templates/header/sidenavright/sidenavRightView.min.html'
        };
    });

})();