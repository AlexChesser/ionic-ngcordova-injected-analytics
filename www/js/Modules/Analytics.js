angular.module('starter')
.factory('Analytics', function($log, $ionicPlatform, $rootScope, $cordovaGoogleAnalytics){
    // https://developer.android.com/sdk/installing/adding-packages.html
    // note that the google play services SDK must be installed in order 
    // to compile this
    //
    // REQUIRES:
    // ========
    //      Google Play Services SDK
    //      Google Repository SDK
    //
    /// The AnalyticsStub variable is in place to ensure we have SOMETHING available to the browser
    //  while working on the project. In this case, real analytics only work when this is installed
    //  on device, however outputs are made available to the user when this is running under 
    //  `Ionic Serve` 
    //  
    var AnalyticsStub = {};
    var GAFunctionNames = Object.keys($cordovaGoogleAnalytics);
    // Add a simple LOG function to the browser stub. Real tracking does not occur here.
    GAFunctionNames.forEach(function _addLoggerToStub(name){
        AnalyticsStub[name] = function(){
            // Log whatever values have been passed into this function
            $log.debug.apply(AnalyticsStub, arguments)
        }
    });

    // create an angular scope in order to use the PUB/SUB functions
    var $scope = $rootScope.$new();
    var a = {
        $scope: $scope,
        Init: function(){
            // The wrapped function will not attempt to fire until the GA objects have been correctly 
            // configured. At which point they'll all merrily go on about their day.
            GAFunctionNames.forEach(function _wrapTracker(name){
                this[name] = function(){
                    // If the tracker's function is available, call it.
                    if(this.tracker[name]){
                        this.tracker[name].apply(this, arguments)
                    // otherwise, make a call 
                    } else {
                        $scope.$on('$cordovaGoogleAnalytics.Available', function(){
                            this.tracker[name].apply(this, arguments)
                        }.bind(this))
                    }
                }.bind(this)
            }.bind(this));
        },
        tracker: {}
    };
    a.Init();

    $ionicPlatform.ready(function _configure(){
        a.tracker = (typeof analytics !== 'undefined') ? $cordovaGoogleAnalytics : AnalyticsStub;
        a.tracker.debugMode();
        a.tracker.startTrackerWithId('UA-XXXXXXXX-X');
        a.$scope.$broadcast('$cordovaGoogleAnalytics.Available');
    });

    return a;

})
