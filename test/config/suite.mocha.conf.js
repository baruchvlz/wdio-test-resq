exports.config = {
  runner: 'local',
  specs: [
    './test/specs/*.js'
  ],
  exclude: [

  ],
  maxInstances: 15,
  capabilities: [
    {
      maxInstances: 5,
      browserName: 'firefox',
      'moz:firefoxOptions': {
        args: ['--headless'],
      },
    },
],
  sync: true,
  logLevel: 'silent',
  deprecationWarnings: true,
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  // services: ['sauce'],
  // region: 'us',
  // user: process.env.SAUCE_USER,
  // key: process.env.SAUCE_KEY,
  path: '/',
  baseUrl: 'http://localhost',
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 90000,
    compilers: ['js:@babel/register'],
  },
  reporters: [
    'spec',
],
  onPrepare: function () {
    console.log(new Date(), '**** let\'s go ****');
  },
  beforeSession: function () {
    require('@babel/register');
  },
  onComplete: function() {
    console.log(new Date(), '**** that\'s it ****');
  }
}
