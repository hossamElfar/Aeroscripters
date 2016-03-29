/* Create Angular App Instance */


lufthansa = angular.module('lufthansa', ['ngRoute']);

    /**
     * Angular Routes
     */
    lufthansa.config(function($routeProvider) {
        $routeProvider

        // route for the home page
            .when('/', {
                templateUrl : 'partials/landing.html',
                controller  : 'mainCtrl'
            })


    });



