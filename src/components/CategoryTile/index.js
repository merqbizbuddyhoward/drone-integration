import React from 'react'
import './styles.scss'

export default ({
  children,
  defaultText,
  defaultImageSrc,
  defaultImageAlt = '',
}) => {
  return (
    <div className="CategoryTile">
      <p className="CategoryTile__title">{defaultText}</p>
      <img
        className="CategoryTile__image"
        src={defaultImageSrc}
        alt={defaultImageAlt}
      />
      {children}
    </div>
  )
}
