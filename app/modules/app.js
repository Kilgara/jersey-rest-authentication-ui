/**
 * Created by root on 08.07.2015.
 */
angular.module('app', ['ngRoute', 'LoginModule', 'MainModule'])
    .config(function($routeProvider) {

        $routeProvider
            .when('/', {
                controller: 'LoginController',
                templateUrl: 'app/views/login.html'
            })
            .when('/main', {
                controller: 'MainController',
                templateUrl: 'app/views/main.html'
            })
            .otherwise({
                redirectTo: '/'
            })
    }
);