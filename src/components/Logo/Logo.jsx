import React from 'react'
import Link from 'gatsby-link'
import './styles.scss'
import merqbizWhiteLogo from './img/merqbiz-white-logo.png'
import merqbizColorLogo from './img/merqbiz-color-logo.png'
import voithWhiteLogo from './img/voith-logotype-white.png'
import voithGrayLogo from './img/voith-logotype-gray.png'

const merqbiz = {
  white: merqbizWhiteLogo,
  color: merqbizColorLogo
}

const voith = {
  white: voithWhiteLogo,
  gray: voithGrayLogo
}

const MerqLogo = ({ type = 'white', hasLink = false }) => {
  if (hasLink) {
    return (
      <Link to="/">
        <img
          src={merqbiz[type]}
          alt="merQbiz Logo"
          className="Logo_merq-image"
        />
      </Link>
    )
  }
  return (
    <img src={merqbiz[type]} alt="merQbiz Logo" className="Logo_merq-image" />
  )
}

const VoithLogo = ({ type = 'white' }) => (
  <img
    src={voith[type]}
    style={{ width: 43, height: 10 }}
    alt="Voith Logo"
    className="Logo_voith-image"
  />
)

const PoweredByVoith = ({ type = 'white' }) => (
  <div className="Logo__secondary">
    <p className="Logo__secondary_caption">POWERED BY</p>
    <img
      src={voith[type]}
      style={{ width: 43, height: 10 }}
      alt="Voith Logo"
      className="Logo_voith-image"
    />
  </div>
)

export default ({
  showMerq = false,
  merqHasLink = false,
  merqType = 'white',
  showVoith = false,
  voithType = 'white',
  showPoweredByVoith = false
}) => (
  <div className="Logo">
    <div className="Logo__primary">
      {showMerq && <MerqLogo type={merqType} hasLink={merqHasLink} />}
      {showVoith && <VoithLogo type={voithType} />}
    </div>

    {showPoweredByVoith && <PoweredByVoith type={voithType} />}
  </div>
)
