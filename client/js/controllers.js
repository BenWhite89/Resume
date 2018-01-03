angular.module('myResume.controllers', ['ngRoute', 'ngResource'])
    .controller('NavbarController', ['$rootScope', '$location', 'PlayService', function($rootScope, $location, PlayService) {
        
        $rootScope.shouldAppear = true;
        $rootScope.transition = function(destination) {
            $rootScope.shouldAppear = false;
            $rootScope.shouldFade = true;
            $location.path('/' + destination)
            $rootScope.shouldFade = false;
            $rootScope.shouldAppear = true;
        }

        $rootScope.rewind = false;
        $rootScope.play = false;
        $rootScope.forward = false;
        $rootScope.eject = false;
        $rootScope.power = false;
        $rootScope.powerEffect = false;

        $rootScope.activeToggle = function(id) {
            $rootScope[id] = $rootScope[id] ? false : true;
        }

        $rootScope.pauseToggle = function() {
            $rootScope.pause = $rootScope.pause ? false : true;
            console.log($rootScope.pause);
            $rootScope.pause ? PlayService.startTimer() : PlayService.pauseTimer();
        }

        $rootScope.powerToggle = function() {
            $rootScope.powerEffect = $rootScope.powerEffect ? false : true;
        }

        $rootScope.ff = function() {
            PlayService.forward();
        }

        $rootScope.back = function() {
            PlayService.backward();
        }
    }])