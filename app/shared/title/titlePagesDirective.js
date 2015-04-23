(function(){
    angular.module('titlePagesDirective', ['titlePagesController'])

    .directive('dcTitle', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/title/titlePagesView.min.html',
            controller: 'titlePagesController'
        };
    });

})();