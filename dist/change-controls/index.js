import PropTypes from 'prop-types';
import React from 'react'; //  Semantic-UI-React

import { Button } from 'semantic-ui-react'; //  Style

import './index.css';

const ChangeControls = props => {
  const {
    actions: {
      showDate,
      showTime,
      showZone
    },
    visible: {
      date,
      time,
      zone
    },
    allowDate,
    allowTime,
    allowZone
  } = props;
  return React.createElement(Button.Group, {
    basic: true,
    floated: "right"
  }, allowDate && !date && React.createElement(Button, {
    icon: "calendar alternate outline",
    onClick: showDate
  }), allowTime && !time && React.createElement(Button, {
    icon: "clock outline",
    onClick: showTime
  }), allowZone && !zone && React.createElement(Button, {
    icon: "world",
    onClick: showZone
  }));
};

ChangeControls.propTypes = {
  allowDate: PropTypes.bool.isRequired,
  allowTime: PropTypes.bool.isRequired,
  allowZone: PropTypes.bool.isRequired,
  actions: PropTypes.shape({
    showDate: PropTypes.func.isRequired,
    showTime: PropTypes.func.isRequired,
    showZone: PropTypes.func.isRequired
  }).isRequired,
  visible: PropTypes.shape({
    date: PropTypes.bool.isRequired,
    time: PropTypes.bool.isRequired,
    zone: PropTypes.bool.isRequired
  }).isRequired
};
export { ChangeControls as default };