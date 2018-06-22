const autoprefixer = require('autoprefixer')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

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
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://b95939ce7fee4c9eb268448fb549e99e@sentry.io/1230315',
        // Raven.js version, this is optional.
        version: '3.26.2'
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
    const USER_JOIN_SUCCESS = { success: true }
    const USER_JOIN_EMAIL_EXISTS_FAILURE = {
      error: 'true',
      message:
        'A customer with the same email already exists in an associated website.'
    }
    const SELLER_LOGIN_SUCCESS = {
      location:
        'placeholder representing the seller app url to be redirected to'
    }
    const BUYER_LOGIN_SUCCESS = {
      location: 'placeholder representing the buyer app url to be redirected to'
    }

    const { npm_config_user_join_email_exists } = process.env
    if (npm_config_user_join_email_exists) {
      app.use(process.env.REQUEST_ACCESS_URL, function(req, res, next) {
        res.send(USER_JOIN_EMAIL_EXISTS_FAILURE)
      })
    } else {
      app.use(process.env.REQUEST_ACCESS_URL, function(req, res, next) {
        res.send(USER_JOIN_SUCCESS)
      })
    }

    app.use(process.env.SELLER_LOGIN_URL, function(req, res, next) {
      res.send(SELLER_LOGIN_SUCCESS)
    })

    app.use(process.env.BUYER_LOGIN_URL, function(req, res, next) {
      res.send(BUYER_LOGIN_SUCCESS)
    })
  }
}
