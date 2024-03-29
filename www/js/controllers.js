angular.module('coupen.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicLoading, $timeout, hashid_salt) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    $ionicLoading.show({
      template: 'Logging in...'
    });

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $ionicLoading.hide();
      $scope.closeLogin();
    }, 4000);
  };
})

.controller('QRController', function ($scope, myWebSocket) {
  $scope.clientId = 5;
  $scope.transaction_id = 225;
  myWebSocket.emit('client-join',
      {
        clientId: $scope.clientId
      });
  myWebSocket.on('customer-transaction-begin', function (msg) {
    console.log("We got a live one with: " + msg);
    myWebSocket.emit('customer-transaction-successful', "fucking successful for customer: " + msg);
  });
})

.controller('BarcodeController', function ($scope, myWebSocket) {
    $scope.couponId = 639382000393;
    $scope.format = "UPC";
})

.controller('PlaylistsCtrl', function($scope) {

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
