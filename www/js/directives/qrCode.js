/**
 * Created by stan on 5/5/2015.
 */

angular.module('coupen.directives.qrCode', [])
    .directive('qrCode', function(){
       return {
           restrict: 'E',
           scope: {
               clientId: '=',
               transactionId: '=',
               selector: '='
           },
           templateUrl: "templates/directives/qrCode.html",
           controller: function($scope, hashid_salt) {
               var qrOptions = {};
               qrOptions.render = 'image';
               var hashid = new Hashids(hashid_salt);
               var text = hashid.encode(parseInt($scope.clientId), parseInt($scope.transactionId));
               console.log(text);
               console.log(hashid.decode(text));
               qrOptions.text = text;
               $($scope.selector).qrcode(qrOptions);
           }
       };
    });
