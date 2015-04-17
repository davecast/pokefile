(function(){
    angular.module('commentsDirective', ['commentsController'])

    .directive('dcComments', function () {
        return {
            restrict: 'E',
            controller: 'commentsController',
            templateUrl: '../templates/comments/commentsView.min.html'
        };
    });

})();