angular.module('myResume.controllers', ['ngRoute', 'ngResource'])
    .controller('NavbarController', ['$rootScope', '$location', function($rootScope, $location) {
        $rootScope.shouldAppear = true;
        $rootScope.transition = function(destination) {
            $rootScope.shouldAppear = false;
            $rootScope.shouldFade = true;
            $location.path('/' + destination)
            $rootScope.shouldFade = false;
            $rootScope.shouldAppear = true;
        }
    }])