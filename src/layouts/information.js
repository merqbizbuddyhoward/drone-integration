import React from 'react'
import PropTypes from 'prop-types'
import Link, { withPrefix } from 'gatsby-link'

import App from 'grommet/components/App'
import Box from 'grommet/components/Box'

export default class InformationLayout extends React.Component {
  static propTypes = {
    children: PropTypes.func
  }

  render() {
    return (
      <App className="InformationLayout" centered={true}>
        <div className="InformationLayout__header">
          <img
            className="InformationLayout_logo"
            src={withPrefix('/assets/images/logos/merQbiz-white-logo.png')}
            alt="Voith and merQbiz logo"
          />
        </div>
        <Box className="InformationLayout__main">{this.props.children()}</Box>
      </App>
    )
  }
}
