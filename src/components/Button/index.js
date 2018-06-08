import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = ({ children, type }) => {
  const typeModifier = type ? `is-${type}` : '';

  return <div className={`Button ${typeModifier}`}>{children}</div>;
}

Button.propTypes = {
  type: PropTypes.string
}

export default Button