(function(){
    
    angular.module('routes', ['ngRoute'])
  
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        
        $routeProvider.when('/home', {
            templateUrl: '../templates/home/homeView.min.html',
            controller: 'homeController'
        })
        .when('/pokemons', {
            templateUrl: '../templates/pokemons/pokemons.min.html',
        })
        .when('/pokemons/view', {
            templateUrl: '../templates/pokemons/pokemons.min.html',
        })
        .when('/contact', {
            templateUrl: '../templates/contact/contact.min.html',
        })
        .otherwise({
            redirectTo: '/home'
        });
        
        $locationProvider.hashPrefix('!');

    }]);

})();