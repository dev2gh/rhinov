/**
 * Main UserProfile app module
 *
 * @type {angular.module}
 */
(function() {
    'use strict';

    angular.module( 'userInfos', ['ui.router', 'ngImgCrop'])

    .config( [ '$stateProvider', '$urlRouterProvider', '$locationProvider', function( $stateProvider, $urlRouterProvider, $locationProvider ) {

        // user infos form state
        $stateProvider
        .state( 'personnelles', {
            url: '/personnelles',
            templateUrl: 'templates/profile-form.html'
        })

        // billing form state
        .state( 'facturation', {
            url: '/facturation',
            templateUrl: 'templates/billing-form.html'
        })

        // agency form state
        .state('agence', {
            url: '/agence',
            templateUrl: 'templates/agency-form.html',
        });

        // set the default activated tab with the first state
        $urlRouterProvider.otherwise('/personnelles');

    }])

    .filter( 'debug', function() {
        return function( input ) {
            if ( input === '' ) return 'empty string';
                return input ? input : ( '' + input );
        };
    });

}());
