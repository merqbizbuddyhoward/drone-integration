const path = require('path')

const domain = path.resolve('/public')
const threshold = 0.2

module.exports = [
    {
      'label': 'MerQbiz Thank You Page',
      'url': path.join(domain, 'thank-you', 'index.html'),
      'misMatchThreshold' : threshold,
      'requireSameDimensions': true
    },
    {
      'label': 'MerQbiz Update Password Page',
      'url': path.join(domain, 'update-password', 'index.html'),
      'misMatchThreshold' : threshold,
      'requireSameDimensions': true
    }
  ]