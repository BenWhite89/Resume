angular.module('myResume.services', ['ngRoute', 'ngResource'])
    .service('PlayService', ['$location', function($location) {
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
            interval = setInterval(function() {
                timer += 1;
                console.log(timer);
                if (timer = 10) {
                    console.log(timer);
                    timer = 0;
                    current = $location.path();
                    console.log(current);
                    current = current.slice(1, current.length);
                    currentId = pageList.findIndex(function(e) {
                        return e === current;
                    })
                    console.log(currentId);
                    nextId = currentId + 1;
                    console.log(nextId);
                    next = pageList[nextId];
                    console.log(next);
                    $location.path('/' + next);
                }
            }, 1000);
        }

        function pauseTimer() {
            clearInterval(interval);
        }

        function forward() {
            timer = 0;
            current = $location.path();
            console.log(current);
            currentId = pageList.findIndex(function(e) {
                return e === current;
            })
            nextId = currentId + 1;
            next = pageList[nextId];
            $location.path('/' + next);
        }

        function backward() {
            timer = 0;
            current = $location.path();
            console.log(current);
            currentId = pageList.findIndex(function(e) {
                return e === current;
            })
            nextId = currentId - 1;
            next = pageList[nextId];
            $location.path('/' + next);
        }

    }]);