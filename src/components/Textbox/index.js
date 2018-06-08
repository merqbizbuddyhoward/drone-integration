import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Textbox = ({ children, type }) => {
  const typeModifier = type ? `is-${type}` : '';

  return <div className={`Textbox ${typeModifier}`}>{children}</div>;
}

Textbox.propTypes = {
  type: PropTypes.string
}

export default Textbox