import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ContentSwitcher = ({ children, type }) => {
  const typeModifier = type ? `is-${type}` : '';

  return <div className={`ContentSwitcher ${typeModifier}`}>{children}</div>;
}

ContentSwitcher.propTypes = {
  type: PropTypes.string
}

export default ContentSwitcher