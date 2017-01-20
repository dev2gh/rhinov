/**
* UserProfile module controller
*
* @type {angular.module}
*/
(function () {
    'user strict';

    var app = angular.module('userProfile');

    app.controller( 'userProfileCtrl', function( $scope, $state ) {

        // image cropper
        $scope.imageAvatar = '';
        $scope.imageLogo = '';
        $scope.croppedAvatar = '';
        $scope.croppedLogo = '';


        // tabs state manager
        $scope.tabs = [
            {
                title: 'personnelles',
                uploader_label: 'Votre avatar',
                uploader_button_text: 'Charger une photo',
                uploader_caption: ''
            },
            { title: 'facturation' },
            {
                title: 'agence',
                uploader_label: 'Votre logo',
                uploader_button_text: 'Charger un logo',
                uploader_caption: '2 Mo maximum'
            }
        ];
        $scope.$on( '$stateChangeSuccess', function(){
            $scope.tabs.forEach( function( item ){
                item.active = $state.includes( item.title );
                if ( true === item.active ) {
                    $scope.current = item;
                }
                if ( true === item.active && 'personnelles' === item.title ) {
                    $scope.cropped = 'croppedAvatar';
                }
                if ( true === item.active && 'agence' === item.title ){
                    $scope.cropped = 'croppedLogo';
                }
            });
        });


        // form submission handler
        $scope.submit = function(form) {

            console.log(form);

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
