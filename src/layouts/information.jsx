import React from 'react'
import Helmet from 'react-helmet'

import App from 'grommet/components/App'
import Box from 'grommet/components/Box'

import Logo from '../components/Logo'

import '../scss/main.scss'

export default class InformationLayout extends React.Component {
  render() {
    const { siteMetadata } = this.props.data.site

    return (
      <App className="InformationLayout" centered>
        <Helmet
          title={siteMetadata.title}
          meta={[
            { name: 'description', content: siteMetadata.description },
            { name: 'keywords', content: siteMetadata.keywords }
          ]}
        />
        <div className="InformationLayout__header">
          <Logo />
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
