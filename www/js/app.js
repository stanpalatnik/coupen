// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('coupen', ['ionic', 'coupen.controllers', 'coupen-constants', 'coupen.directives.qrCode', 'coupen.directives.barcode', 'btford.socket-io'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.factory('myWebSocket', function (socketFactory) {
    var myIoSocket = io.connect('http://localhost:7076/');

    mySocket = socketFactory({
        ioSocket: myIoSocket
    });

    return mySocket;
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.transaction', {
    url: "/transaction",
    views: {
      'menuContent': {
        templateUrl: "templates/transaction_generator.html",
        controller: "QRController"
      }
    }
  })
  .state('app.barcode', {
    url: "/barcode",
    views: {
      'menuContent': {
        templateUrl: "templates/barcode_view.html",
        controller: "BarcodeController"
      }
    }
  })
  .state('app.playlists', {
    url: "/playlists",
    views: {
      'menuContent': {
        templateUrl: "templates/playlists.html",
        controller: 'PlaylistsCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});
