/**
* UserInfos module controller
*
* @type {angular.module}
*/
(function () {
    'use strict';

    angular.module('userInfos')

    .controller( 'userInfosCtrl', ['$scope', '$state', 'TabsService',
        function( $scope, $state, TabsService ) {

            var _this = this,
                tabs = TabsService.tabs;

            $scope.$on( '$stateChangeSuccess', function(){
                for ( var index in tabs ) {
                    if ( tabs.hasOwnProperty( index ) ) {
                        tabs[index].active = $state.includes( tabs[index].title );
                    }
                }
                _this.tabs = tabs;
            });
        }
    ])

    .controller( 'profileCtrl', function( $scope, LocalUserInfosService, TabsService ) {

        // (!)
        selectTransformer.init( 'block_civilite' );

        // handle the user profile form
        this.submit = function( form ) {

            $scope.message = '';
            $scope.formerror = '';
            $scope.formvalid = '';
            $scope.validated = false;

            // Trigger validation flag.
            $scope.submitted = true;

            // If form is invalid, return and let AngularJS show validation errors.
            if (form.$invalid) {
                $scope.formerror = form;
                $scope.message = 'Désolé, Quelques erreurs se sont glissées dans formulaire!';
                return;
            }

            $scope.validated = true;
            $scope.formvalid = form;
            $scope.message = 'Votre mise à jour a bien été enregistrée!';
        };
    })

    .controller( 'billingCtrl', function( $scope, LocalUserInfosService, TabsService ) {

        // (!)
        selectTransformer.init( 'block_country' );

        this.submit = function( form ) {

            $scope.message = '';
            $scope.formerror = '';
            $scope.formvalid = '';
            $scope.validated = false;

            // Trigger validation flag.
            $scope.submitted = true;

            // If form is invalid, return and let AngularJS show validation errors.
            if (form.$invalid) {
                $scope.formerror = form;
                $scope.message = 'Désolé, Quelques erreurs se sont glissées dans formulaire!';
                return;
            }

            $scope.validated = true;
            $scope.formvalid = form;
            $scope.message = 'Votre mise à jour a bien été enregistrée!';

        };
    })

    .controller( 'agencyCtrl', function( $scope, LocalUserInfosService, TabsService ) {

        this.submit = function( form ) {

            $scope.message = '';
            $scope.formerror = '';
            $scope.formvalid = '';
            $scope.validated = false;

            // Trigger validation flag.
            $scope.submitted = true;

            // If form is invalid, return and let AngularJS show validation errors.
            if (form.$invalid) {
                $scope.formerror = form;
                $scope.message = 'Désolé, Quelques erreurs se sont glissées dans formulaire!';
                return;
            }

            $scope.validated = true;
            $scope.formvalid = form;
            $scope.message = 'Votre mise à jour a bien été enregistrée!';

        };
    });
})();
