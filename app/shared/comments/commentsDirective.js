(function(){
    angular.module('commentsDirective', [])

    .directive('dcComments', function () {
        return {
            restrict: 'E',
            templateUrl: '../templates/comments/commentsView.min.html'
        };
    });

})();