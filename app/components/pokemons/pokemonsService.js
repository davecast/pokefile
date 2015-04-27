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

         function Byid(id){
            var deferred = $q.defer();

            all().then(function(data){
               var results = data.filter(function(pokemon){
                  return pokemon.id === id;
               });
            });

            if (results.length > 0) {
               deferred.resolve(results[0]);
            }else{
               deferred.reject();
            }
            return deferred.promise;
         }
		return {
			all: all
		};
}]);