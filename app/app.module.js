(function(){

    var _APP = 'pokefile';

    var _API = '';

    var _SERVICES = [   
            
    ];

    var _CONTROLLERS = [
        'homeController',
        'contactController',
        'pokeViewController',
        'pokemonsController'
    ];

    var _DIRECTIVES = [
        'headerDirective',
        'titlePagesDirective'
    ];

    var _FILTERS = [
        'pokemonsPictureFilters'
    ];

    var _THIRD_PARTY_APPS = [
        'ngMaterial'
    ]; 


    var _DEPENDENCIES = _SERVICES.concat(_CONTROLLERS); 
        _DEPENDENCIES = _DEPENDENCIES.concat(_DIRECTIVES);
        _DEPENDENCIES = _DEPENDENCIES.concat(_FILTERS);
        _DEPENDENCIES = _DEPENDENCIES.concat(_THIRD_PARTY_APPS);
        _DEPENDENCIES = _DEPENDENCIES.concat(['routes']);


    angular.module(_APP, _DEPENDENCIES)
    
    .factory('api', function() {
        return {
            url: _API
        };
    })

    .controller('Controller', ['$scope', function ($scope) {
        
    }]);

})();
