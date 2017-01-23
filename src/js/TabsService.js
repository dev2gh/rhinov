/**
* Tabs depending on state
*/
(function() {
    'use strict';

    angular.module('userInfos')

    .service('TabsService', function(){

        this.tabs = {};

        this.tabs.profile =  {
                title: 'personnelles',
                uploader_label: 'Votre avatar',
                uploader_button_text: 'Charger une photo',
                uploader_caption: ''
            };

        this.tabs.billing = {
                title: 'facturation'
            };
            
        this.tabs.agency = {
            title: 'agence',
            uploader_label: 'Votre logo',
            uploader_button_text: 'Charger un logo',
            uploader_caption: '2 Mo maximum'
        };

    });

})();
