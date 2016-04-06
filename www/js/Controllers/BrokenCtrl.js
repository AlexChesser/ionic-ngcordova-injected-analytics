angular.module('starter').controller('BrokenCtrl', function($cordovaGoogleAnalytics, $log, $scope){
  $log.debug("BrokenCtrl")
  // NOTE: save for the try/catch this is identical to the sample code provided within
  // the NG-CORDOVA documentation.
  // http://ngcordova.com/docs/plugins/googleAnalytics/
  try {
    // turn on debug mode
    // https://github.com/danwilson/google-analytics-plugin#javascript-usage
    $cordovaGoogleAnalytics.debugMode();
    // start tracker
    // https://developers.google.com/analytics/devguides/collection/analyticsjs/

    $cordovaGoogleAnalytics.startTrackerWithId('UA-000000-01');

    // set user id
    // https://developers.google.com/analytics/devguides/collection/analyticsjs/user-id

    $cordovaGoogleAnalytics.setUserId('USER_ID');

    // track a view
    // https://developers.google.com/analytics/devguides/collection/analyticsjs/screens
    // Hint: Currently no support for appName, appId, appVersion, appInstallerId
    //       If you need support for it, please create an issue on github:
    //       https://github.com/driftyco/ng-cordova/issues

    $cordovaGoogleAnalytics.trackView('Home Screen');

    // set custom dimensions
    // https://developers.google.com/analytics/devguides/platform/customdimsmets

    $cordovaGoogleAnalytics.addCustomDimension('dimension1', 'Level 1');

    // track event
    // https://developers.google.com/analytics/devguides/collection/analyticsjs/events

    $cordovaGoogleAnalytics.trackEvent('Videos', 'Video Load Time', 'Gone With the Wind', 100);

    // add transaction
    // https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce#addTrans

    $cordovaGoogleAnalytics.addTransaction('1234', 'Acme Clothing', '11.99', '5', '1.29', 'EUR');

    // add transaction item
    // https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce#addItem

    $cordovaGoogleAnalytics.addTransactionItem(
        '1234', 'Fluffy Pink Bunnies', 'DD23444', 'Party Toys', '11.99', '1', 'GBP'
    );

  } catch (e) {
      $log.debug(e);
  }




});