angular.module('pokemonsService', [])

   .factory('pokemonsFactory', ['$http', '$q', 'api',
   function ($http, $q, api){
      
      	function all(){
      		var deferred = $q.defer();

      		$http.get('assets/json/pokemons.json')
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function(data) {
            });

            return deferred.promise;
      	}

		return {
			all: all
		};
}]);