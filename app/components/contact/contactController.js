(function(){
    angular.module('contactController', [])

    .controller('contactController', [ 
    '$scope', '$rootScope',
    function ($scope, $rootScope) {
    	
    	$rootScope.titlepage = 'Pokefile | Contact';
        
    }]);

})();