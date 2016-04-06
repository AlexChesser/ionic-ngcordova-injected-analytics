angular.module('starter').controller('WorkingCtrl', function($log, Analytics){
    $log.debug("WorkingCtrl")
    Analytics.trackView("WorkingCtrl Tracked");
});