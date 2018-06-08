import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const MediaPlayer = ({ children, type }) => {
  const typeModifier = type ? `is-${type}` : '';

  return <div className={`MediaPlayer ${typeModifier}`}>{children}</div>;
}

MediaPlayer.propTypes = {
  type: PropTypes.string
}

export default MediaPlayer