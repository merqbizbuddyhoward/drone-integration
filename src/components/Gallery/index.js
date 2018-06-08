import React, { Component } from 'react'
import './styles.scss'

function GalleryHeader({ children }) {
  return <div className="Gallery__header">{children}</div>
}
function GalleryFooter({ children }) {
  return <div className="Gallery__footer">{children}</div>
}
function GalleryItem({ children }) {
  return <div className="Gallery__item">{children}</div>
}

class Gallery extends Component {
  static Header = GalleryHeader
  static Footer = GalleryFooter
  static Item = GalleryItem

  render() {
    return <div className="Gallery">{this.props.children}</div>
  }
}

export {
  Gallery as default,
  Gallery,
  GalleryHeader,
  GalleryFooter,
  GalleryItem,
}
