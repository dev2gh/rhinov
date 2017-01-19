/**
* Service that persists and retrieves datas from localStorage
*/
(function() {
    'use strict';

    var app = angular.module('userProfile');

    app.factory('localDB', function($q){

        var STORAGE_ID = 'rhinov';

        var DB = {

            results: (JSON.parse(localStorage.getItem(STORAGE_ID)) || []),

            _getFromLocalStorage: function () {
                return this.results;
            },

            _saveToLocalStorage: function ( results ) {
                localStorage.setItem(STORAGE_ID, JSON.stringify( results ));
            },

            get: function () {
                return $q.when(DB._getFromLocalStorage());
            },

            getImage: function ( image ) {
                return $q.when(angular.copy(DB._searchIntoLocalStorage( image )));
            },

            insert: function ( result ) {
                DB.results.push( result );
                return $q.when( DB._saveToLocalStorage( DB.results ) );
            }
        };

        return DB;

    });

})();
