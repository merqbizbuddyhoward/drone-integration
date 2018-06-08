import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Avatar = ({ children, type }) => {
  const typeModifier = type ? `is-${type}` : '';

  return <div className={`Avatar ${typeModifier}`}>{children}</div>;
}

Avatar.propTypes = {
  type: PropTypes.string
}

export default Avatar