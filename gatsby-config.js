const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: 'merQbiz - The Online Marketplace for Recovered Paper',
    description:
      'merQbiz is an Online Marketplace for Recovered Paper. Easily buy, sell, and ship all in one place. Join the future of buying and selling recovered paper, for free!',
    keywords:
      'merQbiz, Recovered Paper, Online Marketplace, RCP, OCC, DLK, Scrap Paper, Waste Paper, Baled Waste Paper, Baled Scrap Paper, Baled Paper, Paper Bales, logistics, transportation, shipping, shipment, buy, sell, ship, buying, seller, buyer, selling, recovered paper marketplace'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: 'custom-sass-loader',
      options: {
        postCssPlugins: [autoprefixer()]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./data/`
      }
    }
  ],
  developMiddleware: app => {
    const NEW_USER_SUCCESS_RESPONSE = { success: true }
    const NEW_USER_CUSTOMER_EXISTS_RESPONSE = {
      error: 'true',
      message:
        'A customer with the same email already exists in an associated website.'
    }
    const { npm_config_customer_exists } = process.env
    if (npm_config_customer_exists) {
      app.use('/customer/register/create', function(req, res, next) {
        res.send(NEW_USER_CUSTOMER_EXISTS_RESPONSE)
      })
    } else {
      app.use('/customer/register/create', function(req, res, next) {
        res.send(NEW_USER_SUCCESS_RESPONSE)
      })
    }
  }
}
