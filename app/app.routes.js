(function(){
    
    angular.module('routes', ['ngRoute'])
  
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        
        $routeProvider.when('/home', {
            template: 'home'
        }).when('/pokemons', {
            templateUrl: 'templates/pokemons/pokemonsView.min.html',
            controller: 'pokemonsController'
        }).when('/pokemons/:id', {
            templateUrl: 'templates/pokeview/pokeView.min.html',
            controller: 'pokeviewController'
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