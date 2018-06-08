import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const IndexLayout = ({ children, data }) => (
  <div className="IndexLayout">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    <header className="IndexLayout__header">
      <img src="/assets/images/logo.svg" alt="merQbiz" />
      {/* Components for header */}
    </header>
    <main className="IndexLayout__main">{children()}</main>
    <footer className="IndexLayout__footer">
      {/* Components for footer */}
    </footer>
  </div>
)

IndexLayout.propTypes = {
  children: PropTypes.func
}

export default IndexLayout

export const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
