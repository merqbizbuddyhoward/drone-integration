import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Link, { withPrefix } from 'gatsby-link'

import App from 'grommet/components/App'
import Box from 'grommet/components/Box'

import '../scss/main.scss'

export default class SingleLayout extends React.Component {
  static propTypes = {
    children: PropTypes.func
  }

  render() {
    const { siteMetadata } = this.props.data.site

    return (
      <App className="SingleLayout" centered={true}>
        <Helmet
          title={siteMetadata.title}
          meta={[
            { name: 'description', content: siteMetadata.description },
            { name: 'keywords', content: siteMetadata.keywords }
          ]}
        />
        <div className="SingleLayout__header">
          <img
            className="SingleLayout_logo"
            src={withPrefix('/assets/images/logos/merQbiz-white-logo.png')}
            alt="Voith and merQbiz logo"
          />
        </div>
        <Box className="SingleLayout__main" full={true} colorIndex="light-1">
          {this.props.children()}
        </Box>
      </App>
    )
  }
}

export const SingleIndexQuery = graphql`
  query SingleIndexQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`
