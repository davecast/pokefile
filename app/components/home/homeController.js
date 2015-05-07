(function(){
    angular.module('homeController', [])

    .controller('homeController', [ 
    '$scope', '$rootScope',
    function ($scope, $rootScope) {
    	
    	$rootScope.titlepage = 'Pokefile | Home';
        
    }]);

})();