'use strict';

angular.module('petstoreApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'btford.socket-io',
    'ui.router',
    'smac'
])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('Home', {
            url:'/',
            templateUrl:'../partials/home.html',
            controller: 'HomeController as homeCtrl'
        });
        $stateProvider.state('AvailablePets', {
            url:'/AvailablePets',
            templateUrl:'../partials/available-pets-overview.html',
            controller: 'AvailablePetsOverviewController as apCtrl'
        });

        $locationProvider.html5Mode(true);
    });