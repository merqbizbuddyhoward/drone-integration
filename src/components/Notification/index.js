import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Notification = ({ children, type }) => {
  const typeModifier = type ? `is-${type}` : '';

  return <div className={`Notification ${typeModifier}`}>{children}</div>;
}

Notification.propTypes = {
  type: PropTypes.string
}

export default Notification