angular.module('myResume.services', ['ngRoute', 'ngResource'])
    .service('PlayService', ['$location', '$interval', function($location, $interval) {
        var timer = 0;
        var pageList = ['', 'presents', 'title', 'overview', 'skills', 'projects', 'experience', 'personal', 'contact'];
        var current = "";
        var currentId = 0;
        var next = "";
        var nextId = 0;
        var pause = true;
        var interval;

        return {
            startTimer: startTimer,
            pauseTimer: pauseTimer,
            forward: forward,
            backward: backward
        }

        function startTimer() {
            interval = $interval(function() {
                forward();
            }, 5000);
        }

        function pauseTimer() {
            $interval.cancel(interval);
        }

        function forward() {
            timer = 0;
            current = $location.path();
            current = current.slice(1, current.length);
            console.log(current);
            currentId = pageList.findIndex(function(e) {
                return e === current;
            });
            console.log(currentId);
            currentId === pageList.length - 1 ? nextId = 0 : nextId = currentId + 1;
            console.log(nextId);
            next = pageList[nextId];
            console.log(next);
            $location.path('/' + next);
        }

        function backward() {
            timer = 0;
            current = $location.path();
            current = current.slice(1, current.length);
            console.log(current);
            currentId = pageList.findIndex(function(e) {
                return e === current;
            });
            currentId === 0 ? nextId = pageList.length - 1 : nextId = currentId - 1;
            next = pageList[nextId];
            $location.path('/' + next);
        }

    }]);