import React from 'react'
import Helmet from 'react-helmet'

import Box from 'grommet/components/Box'

import Logo from '../components/Logo'

import Footer from '../patterns/Footer'

import '../styles/main.scss'

export default class ContentLayout extends React.Component {
  render() {
    const { siteMetadata } = this.props.data.site

    return (
      <div className="ContentLayout">
        <Helmet
          title={siteMetadata.title}
          meta={[
            { name: 'description', content: siteMetadata.description },
            { name: 'keywords', content: siteMetadata.keywords }
          ]}
        />
        <div className="ContentLayout__header">
          <div className="ContentLayout__header__content">
            <Logo showMerq merqHasLink showPoweredByVoith />
          </div>
        </div>
        <div className="ContentLayout__main">
          <div className="ContentLayout__main__content">
            <Box colorIndex="light-1">{this.props.children()}</Box>
          </div>
        </div>
        <div className="ContentLayout__footer">
          <div className="ContentLayout__footer__content">
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

export const ContentIndexQuery = graphql`
  query ContentIndexQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`
