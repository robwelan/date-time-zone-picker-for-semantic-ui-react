import PropTypes from 'prop-types';
import React from 'react'; //  Semantic-React-UI

import { Grid } from 'semantic-ui-react'; //  Components

import { ControlNumber as ControlYear, ControlNumber as ControlMonth } from '../number-controller';
import ControlToday from './today';
import DayController from './day-controller';
import { Header } from './header';
import PresentChange from '../present-change';
import Spacer from '../spacer'; //  Functions

import { getFirstDayNumber } from './functions'; //  Style

import './index.css';

const Calendar = props => {
  const {
    allowDate,
    doSetYear,
    doSetMonth,
    doSetDay,
    doSetToday,
    day,
    month,
    setFirstDay,
    showDate,
    year
  } = props;
  const firstDay = getFirstDayNumber(setFirstDay);
  return React.createElement(React.Fragment, null, allowDate && showDate && React.createElement(Grid, {
    className: "calendar",
    columns: 1,
    container: true
  }, React.createElement(PresentChange, {
    icon: "calendar alternate outline",
    label: "Change Date"
  }, React.createElement(ControlYear, {
    doChange: doSetYear,
    doubleAngle: true,
    placeholder: "YYYY",
    max: 3000,
    min: 1,
    value: year
  }), React.createElement(Spacer, {
    height: "4px"
  }), React.createElement(ControlMonth, {
    doChange: doSetMonth,
    doubleAngle: false,
    placeholder: "M",
    max: 12,
    min: 1,
    value: month
  }), React.createElement(Header, {
    firstDay: firstDay
  }), React.createElement(DayController, {
    setDay: doSetDay,
    day: day,
    month: month,
    year: year,
    firstDay: firstDay
  }), React.createElement(ControlToday, {
    day: day,
    month: month,
    year: year,
    doChange: doSetToday
  }))));
};

Calendar.propTypes = {
  allowDate: PropTypes.bool.isRequired,
  doSetDay: PropTypes.func.isRequired,
  doSetYear: PropTypes.func.isRequired,
  doSetMonth: PropTypes.func.isRequired,
  doSetToday: PropTypes.func.isRequired,
  day: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  setFirstDay: PropTypes.string.isRequired,
  showDate: PropTypes.bool.isRequired,
  year: PropTypes.number.isRequired
};
export default Calendar;