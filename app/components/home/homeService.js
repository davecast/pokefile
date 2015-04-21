angular.module('homeService', [])

   .factory('homeFactory', ['$http', '$q', 'api',
   function ($http, $q, api){
      
      var tab = [
         {
            'title': 'Pokedex',
            'url': 'templates/home/hometabview/pokedexView.min.html'
         },
         {
            'title': 'Stats',
            'url': 'templates/home/hometabview/statView.min.html'
         },
         {
            'title': 'Evolutions',
            'url': 'templates/home/hometabview/evolutionsView.min.html'
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

      var pokemons = {
          "id": "001",
          "name": "Bulbasaur",
          "species": "Seed Pokémon",
          "type": [
            "Grass",
            "Poison"
          ],
          "height": "2′4″ (0.71m)",
          "weight": "15.2 lbs (6.9 kg)",
          "abilities": [
            "Overgrow",
            "Chlorophyll"
          ],
          "stats": {
            "hp": 45,
            "attack": 49,
            "defense": 49,
            "sp.atk": 65,
            "sp.def": 65,
            "speed": 45,
            "total": 318
          },
          "evolution": [
            "Bulbasaur",
            "Ivysaur",
            "Venusaur"
          ]
      };

      return {
         pokemons: pokemons,
         tab: tab,
         onClickTab: onClickTab,
         isActiveTab: isActiveTab,
         getCurrentTab: getCurrentTab
      };
}]);