import PropTypes from 'prop-types';
import React from 'react'; //  Semantic-UI-React

import { Button } from 'semantic-ui-react';

const ControlToday = props => {
  const {
    doChange,
    year,
    month,
    day
  } = props;
  return React.createElement(Button, {
    basic: true,
    className: "today",
    onClick: () => doChange(year, month, day)
  }, 'Today');
};

ControlToday.propTypes = {
  doChange: PropTypes.func.isRequired,
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  day: PropTypes.number.isRequired
};
export { ControlToday as default };