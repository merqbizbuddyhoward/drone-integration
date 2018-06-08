import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Icon = ({ children, type }) => {
  const typeModifier = type ? `is-${type}` : '';

  return <div className={`Icon ${typeModifier}`}>{children}</div>;
}

Icon.propTypes = {
  type: PropTypes.string
}

export default Icon