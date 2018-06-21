import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Logo from '../components/Logo'
import Nav from '../components/Nav'

import Footer from '../patterns/Footer'

// Styles
import '../styles/home.scss'

export default class IndexLayout extends React.Component {
  render() {
    const { siteMetadata } = this.props.data.site

    return (
      <div className="IndexLayout">
        <Helmet
          title={siteMetadata.title}
          meta={[
            { name: 'description', content: siteMetadata.description },
            { name: 'keywords', content: siteMetadata.keywords }
          ]}
        />
        <Header>
          <Header.Left>
            <Logo showMerq={true} type="white" showPoweredByVoith="white" />
          </Header.Left>
          <Header.Right>
            <Nav />
          </Header.Right>
        </Header>
        <main>{this.props.children()}</main>
        <Footer />
      </div>
    )
  }
}

export const LayoutIndexQuery = graphql`
  query LayoutIndexQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`
