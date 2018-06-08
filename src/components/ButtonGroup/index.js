import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ButtonGroup = ({ children, type }) => {
  const typeModifier = type ? `is-${type}` : '';

  return <div className={`ButtonGroup ${typeModifier}`}>{children}</div>;
}

ButtonGroup.propTypes = {
  type: PropTypes.string
}

export default ButtonGroup