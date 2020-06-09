var OktaAuth = '<rootDir>/lib/server';

module.exports = {
  'coverageDirectory': '<rootDir>/build2/reports/coverage',
  'restoreMocks': true,
  'moduleNameMapper': {
    '^OktaAuth(.*)$': OktaAuth
  },
  'testMatch': [
    '**/test/spec/*.js'
  ],
  'roots': [
    'test/spec'
  ],
  'testPathIgnorePatterns': [
    './test/spec/browser.js',
    './test/spec/browserStorage.js',
    './test/spec/cookies.js',
    './test/spec/fingerprint.js',
    './test/spec/general.js',
    './test/spec/oauthUtil.js',
    './test/spec/session.js',
    './test/spec/token.js',
    './test/spec/tokenManager.js',
    './test/spec/webfinger.js',
    './test/spec/pkce.js',
    './test/spec/features.js'
  ],
  'reporters': [
    'default',
    'jest-junit'
  ]
};
