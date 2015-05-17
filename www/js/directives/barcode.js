/**
 * Created by stan on 5/17/2015.
 */
angular.module('coupen.directives.barcode', [])
    .directive('barcode', function(){
        return {
            restrict: 'E',
            scope: {
                couponId: '=',
                format: '='
            },
            template: "<img id=\"barcode\">",
            controller: function($scope) {
                var options = {};
                options.format = $scope.format;
                options.displayValue = true;
                console.log(options);
                console.log($scope.couponId);
                $("#barcode").JsBarcode($scope.couponId, options);
            }
        };
    });