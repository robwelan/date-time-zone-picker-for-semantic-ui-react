import PropTypes from 'prop-types';
import React from 'react'; //  Semantic-UI-React

import { Button, Icon } from 'semantic-ui-react';

const ControlButtons = props => {
  const {
    doClearValues,
    doShowModal,
    showClearButton
  } = props;
  const type = {
    calendar: 'calendar alternate outline',
    time: 'clock outline',
    zone: 'world'
  };
  return React.createElement(Button.Group, {
    attached: "right",
    icon: true
  }, React.createElement(Button, {
    icon: true,
    onClick: () => doShowModal()
  }, React.createElement(Icon, {
    name: type.calendar
  })), showClearButton && React.createElement(Button, {
    icon: true,
    onClick: () => doClearValues()
  }, React.createElement(Icon, {
    name: "delete calendar"
  })));
};

ControlButtons.propTypes = {
  doClearValues: PropTypes.func.isRequired,
  doShowModal: PropTypes.func.isRequired,
  showClearButton: PropTypes.bool.isRequired
};
export { ControlButtons as default };