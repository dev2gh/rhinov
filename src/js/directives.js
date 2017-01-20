/**
* Angular directives to
*  - manage file uploads block templates
*/

(function() {
    'use strict';

    var app = angular.module( 'userProfile' );

    app.directive( 'imageManager', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/image-manager.html',
            link: function(scope, element, attrs) {
                var t = scope.$parent.tabs,
                i = t.length;

                while( --i >= 1 && true !== t[i].active ) {}
                scope.current = t[i];
            }
        };
    }).
    directive( 'imageCropper', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {

                var handleFileSelect=function(evt) {
                    var file = evt.currentTarget.files[0],
                    scParent = scope.$parent,
                    reader = new FileReader();

                    reader.onload = function ( evt ) {
                        scParent.$apply(function( scParent ){
                            if( scParent.current ) {
                                if( 'personnelles' === scParent.current.title ) {
                                    scParent.cropped = 'croppedAvatar';
                                    scParent.imageAvatar = evt.target.result;
                                }
                                if( 'agence' === scParent.current.title ) {
                                    scParent.cropped = 'croppedLogo';
                                    scParent.imageLogo = evt.target.result;
                                }
                            }
                        });
                    };
                    reader.readAsDataURL(file);
                };
                element.on( 'change', handleFileSelect );
            }
        };
    }).
    directive("passwordVerify", function() {
        return {
            require: "ngModel",
            scope: {
                passwordVerify: '='
            },
            link: function(scope, element, attrs, ctrl) {
                scope.$watch(function() {
                    var combined;

                    if ( scope.passwordVerify || ctrl.$viewValue ) {
                        combined = scope.passwordVerify + '_' + ctrl.$viewValue;
                    }
                    return combined;
                }, function(value) {
                    if (value) {
                        ctrl.$parsers.unshift(function(viewValue) {
                            var origin = scope.passwordVerify;
                            if (origin !== viewValue) {
                                ctrl.$setValidity("passwordVerify", false);
                                return undefined;
                            } else {
                                ctrl.$setValidity("passwordVerify", true);
                                return viewValue;
                            }
                        });
                    }
                });
            }
        };
    });
})();
