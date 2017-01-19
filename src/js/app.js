/**
 * Main UserProfile app module
 *
 * @type {angular.module}
 */
(function() {
    'use strict';

    //        Angular.js        Application Name
    //          |                 |               Dependencies
    //          |                 |                   |
    var app = angular.module( 'userProfile', ['ui.router', 'ngImgCrop']);

    app.config( [ '$stateProvider', '$urlRouterProvider', '$locationProvider' , function( $stateProvider, $urlRouterProvider, $locationProvider ) {

        // set possible states to navigate into
        $stateProvider.state( 'personnelles', {
            url: '/personnelles',
            templateUrl: 'templates/user-infos.html'
        })
        .state( 'facturation', {
            url: '/facturation',
            templateUrl: 'templates/user-billing.html'
        })
        .state('agence', {
            url: '/agence',
            templateUrl: 'templates/user-agency.html'
        });

        // set the default activated tab with the first state
        $urlRouterProvider.otherwise('/personnelles');

    }]);

}());
