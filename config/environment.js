'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'proof-of-concept',
    environment,
    firebase: 'https://bruce-wayne-1206.firebaseio.com',
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
      },
      firebase: {
        apiKey: 'AIzaSyCpXGvRDL0e_1vWroNlsTdz3kVsHVfHozA',
        authDomain: 'bruce-wayne-1206.firebaseapp.com',
        databaseURL: 'https://bruce-wayne-1206.firebaseio.com',
        storageBucket: '',
        projectId: "bruce-wayne-1206",
        messagingSenderId: "72175058738"
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
