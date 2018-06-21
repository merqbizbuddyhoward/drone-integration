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
const MerqLogo = ({ type = 'white' }) => (
  <img src={merqbiz[type]} alt="merQbiz Logo" className="Logo_merq-image" />
)
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
  showMerq = true,
  type = 'white',
  showVoith = false,
  showPoweredByVoith = false,
  voithType = 'white'
}) => (
  <div className="Logo">
    <div className="Logo__primary">
      {showMerq && <MerqLogo type={type} />}
      {showVoith && <VoithLogo type={voithType} />}
    </div>

    {showPoweredByVoith && <PoweredByVoith type={voithType} />}
  </div>
)
