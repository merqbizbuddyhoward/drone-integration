import React from 'react'
import classNames from 'classnames'
import './styles.scss'

export default ({ children, isAlternative = false }) => {
  const componentClasses = classNames('LandingSection', {
    'is-alternative': isAlternative,
  })
  return <div className={componentClasses}>{children}</div>
}
