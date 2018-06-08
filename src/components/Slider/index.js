import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Slider = ({ children, type }) => {
  const typeModifier = type ? `is-${type}` : '';

  return <div className={`Slider ${typeModifier}`}>{children}</div>;
}

Slider.propTypes = {
  type: PropTypes.string
}

export default Slider