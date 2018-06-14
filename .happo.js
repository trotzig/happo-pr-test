const { RemoteBrowserTarget } = require('happo.io');

module.exports = {
  endpoint: 'http://4b773133.ngrok.io',
  apiKey: 'abce207e27',
  apiSecret: process.env.HAPPO_API_SECRET,
  targets: {
    chrome: new RemoteBrowserTarget('chrome', {
      viewport: '320x640',
    }),
  },
  type: 'plain',
};
