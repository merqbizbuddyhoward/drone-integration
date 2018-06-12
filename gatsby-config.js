const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: 'merQbiz'
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: 'custom-sass-loader',
      options: {
        postCssPlugins: []
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
