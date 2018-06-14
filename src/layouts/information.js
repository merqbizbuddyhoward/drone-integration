import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Link, { withPrefix } from 'gatsby-link'

import App from 'grommet/components/App'
import Box from 'grommet/components/Box'

import '../scss/main.scss'

export default class InformationLayout extends React.Component {
  static propTypes = {
    children: PropTypes.func
  }

  render() {
    const { siteMetadata } = this.props.data.site

    return (
      <App className="InformationLayout" centered={true}>
        <Helmet
          title={siteMetadata.title}
          meta={[
            { name: 'description', content: siteMetadata.description },
            { name: 'keywords', content: siteMetadata.keywords }
          ]}
        />
        <div className="InformationLayout__header">
          <img
            className="InformationLayout_logo"
            src={withPrefix('/assets/images/logos/merQbiz-white-logo.png')}
            alt="Voith and merQbiz logo"
          />
        </div>
        <Box className="InformationLayout__main">{this.props.children()}</Box>
      </App>
    )
  }
}

export const InformationIndexQuery = graphql`
  query InformationIndexQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`
