import PropTypes from 'prop-types';
import React from 'react';
import { Grid } from 'semantic-ui-react';

// Components
import MeridiemDropdown from './meridiem-dropdown';
import AnalogClockDisplay from './anolog-clock-display';
import {
  ControlNumber as ControlHour,
  ControlNumber as ControlMinute,
  ControlNumber as ControlSecond,
  ControlNumber as ControlMillisecond,
} from '../number-controller';
import PresentChange from '../present-change';
import Spacer from '../spacer';

// Styles
import './index.css';

const Clock = (props) => {
  const {
    doSetHour,
    doSetMinute,
    doSetSecond,
    doSetMillisecond,
    doSetMeridiem,
    hour,
    minute,
    second,
    millisecond,
    meridiem,
    showMillisecond,
    showSecond,
    showTime,
    showTwentyFour,
  } = props;
  const placeholderHours = showTwentyFour ? 'H' : 'h';
  const maxHours = showTwentyFour ? 23 : 12;
  const minHours = showTwentyFour ? 0 : 1;
  const clockHour = showTwentyFour && hour > 12 ? hour - 12 - 1 : hour - 1;
  let controlHour = hour;

  if (!showTwentyFour) {
    if (hour > 12) {
      controlHour = hour - 12;
    }
    if (hour === 0) {
      controlHour = 12;
    }
  }

  return (
    <React.Fragment>
      {showTime && (
        <Grid className="clock" columns={1} container>
          <PresentChange icon="clock outline" label="Change Time">
            <ControlHour
              doChange={doSetHour}
              doubleAngle={false}
              placeholder={placeholderHours}
              max={maxHours}
              min={minHours}
              value={controlHour}
            />
            <Spacer height="4px" />
            <ControlMinute
              doChange={doSetMinute}
              doubleAngle={false}
              max={59}
              min={0}
              placeholder="m"
              value={minute}
            />
            {showSecond && (
              <React.Fragment>
                <Spacer height="4px" />
                <ControlSecond
                  doChange={doSetSecond}
                  doubleAngle={false}
                  max={59}
                  min={0}
                  placeholder="s"
                  value={second}
                />
              </React.Fragment>
            )}
            {showSecond && showMillisecond && (
              <React.Fragment>
                <Spacer height="4px" />
                <ControlMillisecond
                  doChange={doSetMillisecond}
                  doubleAngle={false}
                  max={999}
                  min={0}
                  placeholder="ms"
                  value={millisecond}
                />
              </React.Fragment>
            )}
            {!showTwentyFour && (
              <React.Fragment>
                <Spacer height="4px" />
                <MeridiemDropdown
                  meridiem={meridiem}
                  doSetMeridiem={doSetMeridiem}
                />
              </React.Fragment>
            )}
            {showTwentyFour ? (
              <Spacer height="16px" />
            ) : (
              <Spacer height="8px" />
            )}
            <AnalogClockDisplay
              hour={clockHour}
              minute={minute}
              second={second}
              millisecond={millisecond}
              showSecond={showSecond}
              showMillisecond={showMillisecond}
            />
          </PresentChange>
        </Grid>
      )}
    </React.Fragment>
  );
};

Clock.propTypes = {
  doSetHour: PropTypes.func.isRequired,
  doSetMinute: PropTypes.func.isRequired,
  doSetSecond: PropTypes.func.isRequired,
  doSetMillisecond: PropTypes.func.isRequired,
  doSetMeridiem: PropTypes.func.isRequired,
  hour: PropTypes.number.isRequired,
  millisecond: PropTypes.number.isRequired,
  meridiem: PropTypes.string.isRequired,
  minute: PropTypes.number.isRequired,
  second: PropTypes.number.isRequired,
  showMillisecond: PropTypes.bool.isRequired,
  showSecond: PropTypes.bool.isRequired,
  showTime: PropTypes.bool.isRequired,
  showTwentyFour: PropTypes.bool.isRequired,
};

export { Clock as default };
