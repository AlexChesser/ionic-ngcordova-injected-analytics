# ionic-ngcordova-injected-analytics
A sample project intended to demonstrate an injectable Analytics controller for use in browser development and on device.

there is a lot of "cruft" in this based on the desire to make this a working standalone project. https://github.com/AlexChesser/ionic-ngcordova-injected-analytics/blob/master/www/js/Modules/Analytics.js is the "main" portion of this.  Essentially an "Analytics" object can be injected into any given controller and can be safely used "right away" on device and in-browser.

If an analytics call is made before platform-ready, it will be queued until the device is ready.  
