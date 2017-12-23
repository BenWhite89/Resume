angular.module('myResume', ['ngRoute', 'ngResource', 'myResume.controllers', 'myResume.directives'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/views/overview.html'
            })
            .when('/projects', {
                templateUrl: '/views/projects.html'
            })
            .when('/experience', {
                templateUrl: '/views/experience.html'
            })
            .when('/personal', {
                templateUrl: '/views/personal.html'
            })
            .otherwise({
                redirectTo: '/'
            })

        $locationProvider.html5Mode(true);
    }])