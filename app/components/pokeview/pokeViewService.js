angular.module('pokeViewService', [])

   .factory('pokeViewFactory', ['$http', '$q', 'api',
   function ($http, $q, api){
      
      var tab = [
         {
            'title': 'Pokedex',
            'url': 'templates/pokeview/pokeviewtabview/pokedexView.min.html'
         },
         {
            'title': 'Stats',
            'url': 'templates/pokeview/pokeviewtabview/statView.min.html'
         },
         {
            'title': 'Evolutions',
            'url': 'templates/pokeview/pokeviewtabview/evolutionsView.min.html'
         }
      ];

      var currentTab = tab[0].url;

      function onClickTab(tab) {
         currentTab = tab.url;
      }

      function isActiveTab(urlTab) {
         return urlTab == currentTab;
      }

      function getCurrentTab(){
         return currentTab;
      }

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

      function byId(id){
        var deferred = $q.defer();

        all().then(function(data){
          var results = data.filter(function(pokemon){
            return pokemon.id === id;
          });

          if (results.length > 0) {
            deferred.resolve(results[0]);
          }else{
            deferred.reject();
          }

        });
        
        return deferred.promise;
      }

      return {
         byId:  byId,
         tab: tab,
         onClickTab: onClickTab,
         isActiveTab: isActiveTab,
         getCurrentTab: getCurrentTab
      };
}]);