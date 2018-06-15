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
  ]
}
