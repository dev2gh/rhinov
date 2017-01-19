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

        // $scope.myCroppedImagePersonnelles = '';
        // $scope.myCroppedImageAgence = '';

    });
})();
