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
           template: "<div class=\"qrCode\"></div>",
           controller: function($scope, hashid_salt) {
               var qrOptions = {};
               qrOptions.background = "#50b7ff";
               qrOptions.render = 'canvas';
               qrOptions.radius = 0.5;
               qrOptions.label = "hh label";
               qrOptions.mode = 2;
               qrOptions.fill =  "#333333";
               qrOptions.fontcolor = "#ff9818";
               qrOptions.fontname =  "Ubuntu";
               qrOptions.osX = 0.5;
               qrOptions.mPosY = 0.5;
               qrOptions.mSize = 0.08;
               qrOptions.size = 300;
               qrOptions.minVersion = 6;
               qrOptions.ecLevel = 'H';
               var hashid = new Hashids(hashid_salt);
               var text = hashid.encode(parseInt($scope.clientId), parseInt($scope.transactionId));
               console.log(text);
               console.log(hashid.decode(text));
               console.log(qrOptions);
               qrOptions.text = text;
               $(".qrCode").qrcode(qrOptions);
           }
       };
    });
