angular.module('MainModule', ['MessageService'])
	.controller('MainController', ['$scope', 'MessageService', '$http', '$window', function($scope, MessageService, $http, $window) {

		$scope.logout = function() {
			$http.post('http://localhost:8080/rest/logout', {});
			$http.defaults.headers.common.Authorization = '';
	        $window.location.href = "#/login";
		}

		MessageService.getMessagesFromServer()
			.success(function(data, status, headers, config) {
	                $scope.messages = data;
	        })
	        .error(function(data, status, headers, config) {
	            $window.location.href = "#/login";
	        });
		
	}]);