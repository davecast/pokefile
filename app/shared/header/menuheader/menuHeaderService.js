(function(){

    angular.module('menuHeaderService', [])

        .factory('menuHeaderFactory', ['$location', function ($location){

            tabs=[
                {
                    'title': 'POKEMONES',
                    'url': '/home'
                },
                {
                    'title':'CONTACTENOS',
                    'url': '/contact'
                }
            ];


            var currentTab = $location.path();

            function onClickTab(url) {
                currentTab = url;
            }

            function isActiveTab(url) {
                return url == currentTab;
            }

            return {
                tabs: tabs,
                onClickTab: onClickTab,
                isActiveTab: isActiveTab

            };

        }]);
    
})();