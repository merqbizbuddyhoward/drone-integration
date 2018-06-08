import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const Single = ({ children, data }) => {
  return (
    <div className="SingleLayout">
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' }
        ]}
      />
      <header className="SingleLayout__header">
        <img src="/assets/images/logo.svg" alt="merQbiz" />
        {/* Components for header */}
      </header>
      <main className="SingleLayout__main">{children()}</main>
      <footer className="SingleLayout__footer">
        {/* Components for footer */}
      </footer>
    </div>
  )
}
Single.propTypes = {
  children: PropTypes.func
}

export default Single

export const SingleLayoutQuery = graphql`
  query SingleLayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
