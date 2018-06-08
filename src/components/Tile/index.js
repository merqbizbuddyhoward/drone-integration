import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Tile = ({ children, type }) => {
  const typeModifier = type ? `is-${type}` : '';

  return <div className={`Tile ${typeModifier}`}>{children}</div>;
}

Tile.propTypes = {
  type: PropTypes.string
}

export default Tile