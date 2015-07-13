angular.module('MessageService', [])
	.service('MessageService', ['$http', function($http) {

		this.getMessagesFromServer = function() {
			return $http.post('http://localhost:8080/rest/messages', {});  	
		}

	}]);