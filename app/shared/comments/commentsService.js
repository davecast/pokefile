angular.module('commentsService', [])

	.factory('commentsFactory', ['$http', '$q', 'api',
	    function ($http, $q, api){
	      
	    var prueba = 'hola';

	      

		return {
			prueba: prueba
		};
}]);