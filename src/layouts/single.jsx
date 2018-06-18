import React from 'react'
import Helmet from 'react-helmet'

import App from 'grommet/components/App'
import Box from 'grommet/components/Box'

import Logo from '../components/Logo'

import '../styles/main.scss'

export default class SingleLayout extends React.Component {
  render() {
    const { siteMetadata } = this.props.data.site

    return (
      <App className="SingleLayout" centered>
        <Helmet
          title={siteMetadata.title}
          meta={[
            { name: 'description', content: siteMetadata.description },
            { name: 'keywords', content: siteMetadata.keywords }
          ]}
        />
        <div className="SingleLayout__header">
          <Logo />
        </div>
        <Box
          className="SingleLayout__main"
          alignSelf="center"
          colorIndex="light-1"
          size="auto"
          margin="small"
          align="center"
        >
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
