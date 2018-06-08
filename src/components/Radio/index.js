import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Radio = ({ children, type }) => {
  const typeModifier = type ? `is-${type}` : '';

  return <div className={`Radio ${typeModifier}`}>{children}</div>;
}

Radio.propTypes = {
  type: PropTypes.string
}

export default Radio