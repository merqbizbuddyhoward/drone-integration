import React from 'react'
import './styles.scss'
import merqbizWhiteLogo from './img/merQbiz-white-logo.png'
import merqbizColorLogo from './img/merQbiz-color-logo.png'
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
const VoithLogo = ({ type = 'white' }) => (
  <div className="Logo__secondary">
    <p>POWERED BY</p>
    <img
      src={voith[type]}
      style={{ width: 43, height: 10 }}
      alt="Voith Logo"
      className="Logo_voith-image"
    />
  </div>
)

export default ({ type = 'white', showVoith = false, voithType = 'white' }) => (
  <div className="Logo">
    <div className="Logo__primary">
      <img src={merqbiz[type]} alt="merQbiz Logo" className="Logo_merq-image" />
    </div>
    {showVoith && <VoithLogo type={voithType} />}
  </div>
)
