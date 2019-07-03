import PropTypes from 'prop-types';
import React from 'react';

//  Custom Functions
import { getInputProperties } from './functions';

//  Custom Styles
import './index.css';

const DateTimeZoneInput = (props) => {
  const {
    devsName,
    doOnClick,
    setDate,
    setMilliseconds,
    setSeconds,
    setTime,
    setTwentyFour,
    setValues,
    setZone,
  } = props;

  const InputProperties = getInputProperties(
    setDate,
    setMilliseconds,
    setSeconds,
    setTime,
    setTwentyFour,
    setValues,
    setZone,
  );

  return (
    <div className="ui input">
      <input
        name={devsName}
        onClick={doOnClick}
        readOnly="readonly"
        placeholder={InputProperties.placeholder}
        value={setValues.input.value}
        style={{ width: InputProperties.width }}
      />
    </div>
  );
};

DateTimeZoneInput.defaultProps = {
  devsName: '',
  setValues: {},
};

DateTimeZoneInput.propTypes = {
  doOnClick: PropTypes.func.isRequired,
  devsName: PropTypes.string,
  setDate: PropTypes.bool.isRequired,
  setMilliseconds: PropTypes.bool.isRequired,
  setSeconds: PropTypes.bool.isRequired,
  setTime: PropTypes.bool.isRequired,
  setTwentyFour: PropTypes.bool.isRequired,
  setValues: PropTypes.shape({}),
  setZone: PropTypes.bool.isRequired,
};

export { DateTimeZoneInput as default };
