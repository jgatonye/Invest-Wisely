/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'invest-wisely',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    firebase: {
      apiKey: "AIzaSyArpWxnjZ0K5aeJqsLdODqOWxeRW3AaaEQ",
      authDomain: "investwisely-88b10.firebaseapp.com",
      databaseURL: "https://investwisely-88b10.firebaseio.com",
      storageBucket: "investwisely-88b10.appspot.com",
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };
  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
