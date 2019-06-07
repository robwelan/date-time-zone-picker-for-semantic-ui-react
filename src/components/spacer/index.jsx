import PropTypes from 'prop-types';
import React from 'react';

// styling
import './index.css';

const Spacer = props => {
  const { height } = props;

  return <div className="spacer" style={{ height: `${height}` }} />;
};

Spacer.propTypes = {
  height: PropTypes.string.isRequired,
};

export { Spacer as default };
