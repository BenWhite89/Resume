angular.module('myResume', ['ngRoute', 'ngResource', 'myResume.controllers', 'myResume.directives', 'myResume.services'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/views/warning.html'
            })
            .when('/presents', {
                templateUrl: '/views/presents.html'
            })
            .when('/title', {
                templateUrl: '/views/title.html'
            })
            .when('/overview', {
                templateUrl: '/views/overview.html'
            })
            .when('/skills', {
                templateUrl: '/views/skills.html'
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
            .when('/contact', {
                templateUrl: '/views/contact.html'
            })
            .otherwise({
                redirectTo: '/title'
            })

        $locationProvider.html5Mode(true);
    }])