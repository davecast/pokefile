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
         
        function byType(type){
          var deferred = $q.defer();

            all().then(function(data){
            var results = data.filter(function(pokemon){
              return pokemon.type.some(function(t){
                return t === type;
              });

            });
            
            deferred.resolve(results);
          });
           
          return deferred.promise;
        }

		return {
			all: all,
      byType:byType
		};
}]);