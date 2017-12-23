angular.module('myResume.directives', [])
    .directive('customNav', function() {
        return {
            templateUrl: '../views/navbar.html',
            controller: 'NavbarController'
        }
    })