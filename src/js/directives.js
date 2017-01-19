/**
 * Angular directives to
 *  - manage file uploads block templates
 */

(function() {
    'use strict';

    var app = angular.module('userProfile');

    app.directive('imageManager', function () {
        return {
            restrict: 'E',
            templateUrl: '../../templates/image-manager.html',
            link: function(scope, element, attrs) {
                var t = scope.$parent.tabs,
                    i = t.length;

                while( --i >= 1 && true !== t[i].active ) {}
                scope.current = t[i];
            }
        };
    });

})();
