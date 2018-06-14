import React from 'react'
import Link from 'gatsby-link'

import Logo from '../../components/Logo'

import './styles.scss'

export default () => {
  return (
    <footer className="Footer">
      <Logo type="color" />
      <div className="Footer__content">
        <div className="Footer__content__item">
          <Link className="Footer_link" to="/faq">
            FAQ
          </Link>
          <Link className="Footer_link" to="/careers">
            Careers
          </Link>
          <a
            className="Footer_link"
            href="https://www.linkedin.com/company/merqbiz"
          >
            LinkedIn
          </a>
        </div>
        <div className="Footer__content__item">
          <p class="Footer__support-text">Support</p>
          <p class="Footer__support-text">support@merqbiz.com</p>
          <p class="Footer__support-text">1-855-merQbiz</p>
        </div>
        <div className="Footer__content__item">
          <h4 className="Footer_subheading">Join our mailing </h4>
          <input
            className="Footer_input"
            type="email"
            name=""
            id=""
            placeholder="Email"
          />
          <button className="Footer_button">Subscribe</button>
        </div>
      </div>
    </footer>
  )
}
