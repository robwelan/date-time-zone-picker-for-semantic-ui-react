import PropTypes from 'prop-types';
import React from 'react';
//  Semantic-UI-React
import { Grid } from '../../../frameworks/semantic-ui-react/scripts';
//  Components
import ClockNumbers from './clock-numbers';
import ClockTicks from './clock-ticks';
import Spacer from '../../spacer';
//  Styles
import './index.css';

const AnalogClockDisplay = props => {
  const {
    hour,
    minute,
    second,
    millisecond,
    showSecond,
    showMillisecond,
  } = props;

  const angleHour = (((hour + minute / 60) / 12) * 360).toFixed(0);
  const angleMinute = ((minute / 60) * 360).toFixed(0);
  const angleSecond = ((second / 60) * 360).toFixed(0);
  const angleMillisecond = ((millisecond / 1000) * 360).toFixed(0);

  return (
    <Grid centered columns={1} container>
      <Spacer height="4px" />
      <div className="analog-clock-display-container">
        <div className="clock-face-outer">
          <div className="clock-face-inner" />
          <div className="clock-face">
            <div className="clock-mechanism">
              <div className="clock-center" />
              <div
                className="clock-hand clock-hand--hour"
                style={{
                  transform: `rotate(${angleHour}deg)`,
                  WebkitTransform: `rotate(${angleHour}deg)`,
                }}
              />
              <div
                className="clock-hand clock-hand--minute"
                style={{
                  transform: `rotate(${angleMinute}deg)`,
                  WebkitTransform: `rotate(${angleMinute}deg)`,
                }}
              />
              {showSecond && (
                <div
                  className="clock-hand clock-hand--second"
                  style={{
                    transform: `rotate(${angleSecond}deg)`,
                    WebkitTransform: `rotate(${angleSecond}deg)`,
                  }}
                />
              )}
              {showMillisecond && (
                <div
                  className="clock-hand clock-hand--millisecond"
                  style={{
                    transform: `rotate(${angleMillisecond}deg)`,
                    WebkitTransform: `rotate(${angleMillisecond}deg)`,
                  }}
                />
              )}
            </div>
            <div className="clock-ticks">
              <ClockTicks />
            </div>
            <div className="clock-numbers">
              <ClockNumbers />
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
};

AnalogClockDisplay.defaultProps = {
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0,
};

AnalogClockDisplay.propTypes = {
  hour: PropTypes.number,
  minute: PropTypes.number,
  second: PropTypes.number,
  millisecond: PropTypes.number,
  showSecond: PropTypes.bool.isRequired,
  showMillisecond: PropTypes.bool.isRequired,
};

export { AnalogClockDisplay as default };
