import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Split = ({ children, type }) => {
  const typeModifier = type ? `is-${type}` : '';

  return <div className={`Split ${typeModifier}`}>{children}</div>;
}

Split.propTypes = {
  type: PropTypes.string
}

export default Split