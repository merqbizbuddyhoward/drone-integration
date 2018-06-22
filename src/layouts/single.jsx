import React from 'react'
import Helmet from 'react-helmet'

import App from 'grommet/components/App'
import Box from 'grommet/components/Box'

import Logo from '../components/Logo'

import Footer from '../patterns/Footer'

import '../styles/main.scss'

export default class SingleLayout extends React.Component {
  render() {
    const { siteMetadata } = this.props.data.site

    return (
      <div className="SingleLayout">
        <Helmet
          title={siteMetadata.title}
          meta={[
            { name: 'description', content: siteMetadata.description },
            { name: 'keywords', content: siteMetadata.keywords }
          ]}
        />
        <div className="SingleLayout__header">
          <div className="SingleLayout__header__content">
            <Logo showMerq merqHasLink />
          </div>
        </div>
        <div className="SingleLayout__main">
          <App className="SingleLayout__app">
            <Box
              className="SingleLayout__main"
              alignSelf="center"
              colorIndex="light-1"
              margin="small"
              align="center"
            >
              {this.props.children()}
            </Box>
          </App>
        </div>
        <div className="SingleLayout__footer">
          <div className="SingleLayout__footer__content">
            <Footer />
          </div>
        </div>
      </div>
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
