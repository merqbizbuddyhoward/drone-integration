const path = require('path')

const domain = path.resolve('/public')
const threshold = 0.2

module.exports = [
    {
      'label': 'MerQbiz Landing Page',
      'url': path.join(domain, 'index.html'),
      'misMatchThreshold' : threshold,
      'requireSameDimensions': true
    },
    {
      'label': 'MerQbiz Login Page',
      'url': path.join(domain, 'login', 'index.html'),
      'misMatchThreshold' : threshold,
      'requireSameDimensions': true
    },
    {
      'label': 'MerQbiz Join Page',
      'url': path.join(domain, 'join', 'index.html'),
      'misMatchThreshold' : threshold,
      'requireSameDimensions': true
    },
    {
      'label': 'MerQbiz About Page',
      'url': path.join(domain, 'about', 'index.html'),
      'misMatchThreshold' : threshold,
      'requireSameDimensions': true
    },
    {
      'label': 'MerQbiz FAQ Page',
      'url': path.join(domain, 'faq', 'index.html'),
      'misMatchThreshold' : threshold,
      'requireSameDimensions': true
    },
    {
      'label': 'MerQbiz Forgot Password Page',
      'url': path.join(domain, 'forgot-password', 'index.html'),
      'misMatchThreshold' : threshold,
      'requireSameDimensions': true
    },
    {
      'label': 'MerQbiz 404 Page',
      'url': path.join(domain, '404', 'index.html'),
      'misMatchThreshold' : threshold,
      'requireSameDimensions': true
    },
    {
      'label': 'MerQbiz Dispute Resolution Policy Page',
      'url': path.join(domain, 'dispute-resolution-policy', 'index.html'),
      'misMatchThreshold' : threshold,
      'requireSameDimensions': true
    },
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
    },
    {
      'label': 'MerQbiz User Agreement Page',
      'url': path.join(domain, 'user-agreement', 'index.html'),
      'misMatchThreshold' : threshold,
      'requireSameDimensions': true
    }
  ]