(function(){
    
    angular.module('routes', ['ngRoute'])
  
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        
        $routeProvider.when('/home', {
            templateUrl: 'templates/home/homeView.min.html'
        }).when('/pokemons', {
            templateUrl: 'templates/pokemons/pokemonsView.min.html',
            controller: 'pokemonsController'
        }).when('/pokemons/:name', {
            templateUrl: 'templates/pokeview/pokeView.min.html',
            controller: 'pokeViewController'
        })
        .when('/contact', {
            templateUrl: 'templates/contact/contact.min.html',
        })
        .otherwise({
            redirectTo: '/home'
        });
        
        $locationProvider.hashPrefix('!');

    }]);

})();