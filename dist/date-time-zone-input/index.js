import PropTypes from 'prop-types';
import React from 'react'; //  Custom Functions

import { getClassNames, getInputProperties } from './functions'; //  Custom Styles

import './index.css';

const DateTimeZoneInput = props => {
  const {
    devsClasses,
    devsName,
    doOnClick,
    setDate,
    setMilliseconds,
    setSeconds,
    setTime,
    setTwentyFour,
    setValues,
    setZone
  } = props;
  const classes = getClassNames(devsClasses);
  const InputProperties = getInputProperties(setDate, setMilliseconds, setSeconds, setTime, setTwentyFour, setValues, setZone);
  return React.createElement("div", {
    className: "ui input"
  }, React.createElement("input", {
    className: classes.join(' ').trim(),
    name: devsName,
    onClick: doOnClick,
    readOnly: "readonly",
    placeholder: InputProperties.placeholder,
    value: setValues.input.value,
    style: {
      width: InputProperties.width
    }
  }));
};

DateTimeZoneInput.defaultProps = {
  devsClasses: '',
  devsName: '',
  setValues: {}
};
DateTimeZoneInput.propTypes = {
  doOnClick: PropTypes.func.isRequired,
  devsName: PropTypes.string,
  devsClasses: PropTypes.string,
  setDate: PropTypes.bool.isRequired,
  setMilliseconds: PropTypes.bool.isRequired,
  setSeconds: PropTypes.bool.isRequired,
  setTime: PropTypes.bool.isRequired,
  setTwentyFour: PropTypes.bool.isRequired,
  setValues: PropTypes.shape({}),
  setZone: PropTypes.bool.isRequired
};
export { DateTimeZoneInput as default };