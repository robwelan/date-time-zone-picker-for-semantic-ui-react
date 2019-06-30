import PropTypes from 'prop-types';
import React from 'react'; //  Semantic-UI-React

import { Icon, Label, Segment } from 'semantic-ui-react';

const PresentChange = props => {
  const {
    children,
    icon,
    label
  } = props;
  return React.createElement(Segment, {
    padded: true
  }, React.createElement(Label, {
    attached: "top"
  }, React.createElement(Icon, {
    name: icon
  }), label), children);
};

PresentChange.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};
export { PresentChange as default };