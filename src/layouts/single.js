import React from 'react'
import PropTypes from 'prop-types'
import Link, { withPrefix } from 'gatsby-link'

import App from 'grommet/components/App'
import Box from 'grommet/components/Box'

export default class SingleLayout extends React.Component {
  static propTypes = {
    children: PropTypes.func
  }

  render() {
    return (
      <App className="SingleLayout" centered={true}>
        <div className="SingleLayout__header">
          <img
            className="SingleLayout_logo"
            src={withPrefix('/assets/images/logos/merQbiz-white-logo.png')}
            alt="Voith and merQbiz logo"
          />
        </div>
        <Box className="SingleLayout__main" full={true} colorIndex="light-1">
          {this.props.children()}
        </Box>
      </App>
    )
  }
}
