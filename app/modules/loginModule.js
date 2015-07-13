angular.module('LoginModule', ['base64Module'])
	.controller('LoginController', ['$scope', '$window', '$http', 'base64Service', function($scope, $window, $http, base64Service) {

	    $scope.submitLogin = function() {

	        var authHeader = 'Basic ' + base64Service.encode($scope.login + ':' + $scope.password);
	        $http.defaults.headers.common.Authorization = authHeader;

	        $http.post('http://localhost:8080/rest/login', {})
	        	.success(function(data, status, headers, config) {
	                $window.location.href = "#/main";
	            })
	        	.error(function(data, status, headers, config) {
	                $window.alert("Wrong username/password. Please try again");
	            });
	    }
	}]);