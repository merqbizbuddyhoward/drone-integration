const port = '8000'
const domain = 'http://localhost:' + port + '/'
const threshold = 0.2

module.exports = [
    {
      "label": "MerQbiz Landing Page",
      "url": domain,
      "misMatchThreshold" : threshold,
      "requireSameDimensions": true
    },
    {
      "label": "MerQbiz Login Page",
      "url": domain + "login",
      "misMatchThreshold" : threshold,
      "requireSameDimensions": true
    },
    {
      "label": "MerQbiz Join Page",
      "url": domain + "join",
      "misMatchThreshold" : threshold,
      "requireSameDimensions": true
    },
    {
      "label": "MerQbiz About Page",
      "url": domain + "about",
      "misMatchThreshold" : threshold,
      "requireSameDimensions": true
    },
    {
      "label": "MerQbiz FAQ Page",
      "url": domain + "faq",
      "misMatchThreshold" : threshold,
      "requireSameDimensions": true
    },
    {
      "label": "MerQbiz Forgot Password Page",
      "url": domain + "forgot-password",
      "misMatchThreshold" : threshold,
      "requireSameDimensions": true
    },
    {
      "label": "MerQbiz 404 Page",
      "url": domain + "404",
      "misMatchThreshold" : threshold,
      "requireSameDimensions": true
    },
    {
      "label": "MerQbiz Dispute Resolution Policy Page",
      "url": domain + "dispute-resolution-policy",
      "misMatchThreshold" : threshold,
      "requireSameDimensions": true
    },
    {
      "label": "MerQbiz Thank You Page",
      "url": domain + "thank-you",
      "misMatchThreshold" : threshold,
      "requireSameDimensions": true
    },
    {
      "label": "MerQbiz Update Password Page",
      "url": domain + "update-password",
      "misMatchThreshold" : threshold,
      "requireSameDimensions": true
    },
    {
      "label": "MerQbiz User Agreement Page",
      "url": domain + "user-agreement",
      "misMatchThreshold" : threshold,
      "requireSameDimensions": true
    }
  ]