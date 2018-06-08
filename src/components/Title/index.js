import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Title = ({ children, type }) => {
  const typeModifier = type ? `is-${type}` : '';

  return <div className={`Title ${typeModifier}`}>{children}</div>;
}

Title.propTypes = {
  type: PropTypes.string
}

export default Title