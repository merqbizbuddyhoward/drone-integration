import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Container = ({ children, type }) => {
  const typeModifier = type ? `is-${type}` : '';

  return <div className={`Container ${typeModifier}`}>{children}</div>;
}

Container.propTypes = {
  type: PropTypes.string
}

export default Container