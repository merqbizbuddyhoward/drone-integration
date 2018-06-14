import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Header from '../components/Header'
import Logo from '../components/Logo'
import Nav from '../components/Nav'

import Footer from '../patterns/Footer'

// Styles
import '../scss/home.scss'

export default class IndexLayout extends React.Component {
  static propTypes = {
    children: PropTypes.func
  }

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
            <Logo showVoith={true} />
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
