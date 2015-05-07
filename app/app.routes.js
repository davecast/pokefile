(function(){
    
    angular.module('routes', ['ngRoute'])
  
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        
        $routeProvider.when('/home', {
            templateUrl: 'templates/home/homeView.min.html',
            controller: 'homeController'
        }).when('/contact', {
            templateUrl: 'templates/contact/contactView.min.html',
            controller: 'contactController'
        }).when('/pokemons', {
            templateUrl: 'templates/pokemons/pokemonsView.min.html',
            controller: 'pokemonsController'
        }).when('/pokemons/:name', {
            templateUrl: 'templates/pokeview/pokeView.min.html',
            controller: 'pokeViewController'
        }).when('/:type', {
            templateUrl: 'templates/pokemons/pokemonsView.min.html',
            controller: 'pokemonsController'
        })
        .otherwise({
            redirectTo: '/home'
        });
        
        $locationProvider.hashPrefix('!');

    }]);

})();