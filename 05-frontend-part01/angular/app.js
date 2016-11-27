'use strict';

// Declare app level module nts
angular.module('demoApp', [ 'ui.router'])

    .config(function($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/");


        // Now set up the states
        $stateProvider
            .state('state1', {
                url: "/state1",
                templateUrl: "views/state1.html"
            })
            .state('state1.list', {
                url: "/list",
                templateUrl: "views/state1.list.html",
            })
            .state('state2', {
                url: "/state2",
                templateUrl: "views/state2.html"
            })
    });