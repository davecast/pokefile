(function(){
    angular.module('searchDirective', ['searchController'])

    .directive('dcSearch', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/searchbox/searchView.min.html',
            controller: 'searchController'
        };
    });

})();