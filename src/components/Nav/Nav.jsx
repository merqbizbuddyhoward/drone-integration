import React from 'react'
import Link from 'gatsby-link'
import './styles.scss'

export default () => (
  <nav className="Nav">
    <Link className="Nav_link" to="/buy">
      Buy
    </Link>
    <Link className="Nav_link" to="/sell">
      Sell
    </Link>
    <Link className="Nav_link" to="/login">
      Login
    </Link>
    <Link className="Nav_link is-button" to="/join">
      Join Now
    </Link>
  </nav>
)
