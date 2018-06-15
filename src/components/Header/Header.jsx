import React from 'react'

import './styles.scss'

export default class extends React.Component {
  static Left({ children }) {
    return <div className="Header__left">{children}</div>
  }

  static Right({ children }) {
    return <div className="Header__right">{children}</div>
  }

  render() {
    return <header className="Header">{this.props.children}</header>
  }
}
