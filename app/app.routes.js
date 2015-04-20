(function(){
    
    angular.module('routes', ['ngRoute'])
  
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        
        $routeProvider.when('/home', {
            templateUrl: '../templates/home/homeView.min.html',
            controller: 'homeController'
        })
        .when('/pokemons', {
            template: 'pokemon list'
        })
        .when('/pokemons/view', {
            template: 'pokemon view'
        })
        .when('/contact', {
            template: 'contact'
        })
        .otherwise({
            redirectTo: '/home'
        });
        
        $locationProvider.hashPrefix('!');

    }]);

})();