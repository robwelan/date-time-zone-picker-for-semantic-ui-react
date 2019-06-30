import PropTypes from 'prop-types';
import React from 'react'; //  Semantic-UI-React

import { Grid } from 'semantic-ui-react'; //  Components

import ClockNumbers from './clock-numbers';
import ClockTicks from './clock-ticks';
import Spacer from '../../spacer'; //  Styles

import './index.css';

const AnalogClockDisplay = props => {
  const {
    hour,
    minute,
    second,
    millisecond,
    showSecond,
    showMillisecond
  } = props;
  const angleHour = ((hour + minute / 60) / 12 * 360).toFixed(0);
  const angleMinute = (minute / 60 * 360).toFixed(0);
  const angleSecond = (second / 60 * 360).toFixed(0);
  const angleMillisecond = (millisecond / 1000 * 360).toFixed(0);
  return React.createElement(Grid, {
    centered: true,
    columns: 1,
    container: true
  }, React.createElement(Spacer, {
    height: "4px"
  }), React.createElement("div", {
    className: "analog-clock-display-container"
  }, React.createElement("div", {
    className: "clock-face-outer"
  }, React.createElement("div", {
    className: "clock-face-inner"
  }), React.createElement("div", {
    className: "clock-face"
  }, React.createElement("div", {
    className: "clock-mechanism"
  }, React.createElement("div", {
    className: "clock-center"
  }), React.createElement("div", {
    className: "clock-hand clock-hand--hour",
    style: {
      transform: `rotate(${angleHour}deg)`,
      WebkitTransform: `rotate(${angleHour}deg)`
    }
  }), React.createElement("div", {
    className: "clock-hand clock-hand--minute",
    style: {
      transform: `rotate(${angleMinute}deg)`,
      WebkitTransform: `rotate(${angleMinute}deg)`
    }
  }), showSecond && React.createElement("div", {
    className: "clock-hand clock-hand--second",
    style: {
      transform: `rotate(${angleSecond}deg)`,
      WebkitTransform: `rotate(${angleSecond}deg)`
    }
  }), showMillisecond && React.createElement("div", {
    className: "clock-hand clock-hand--millisecond",
    style: {
      transform: `rotate(${angleMillisecond}deg)`,
      WebkitTransform: `rotate(${angleMillisecond}deg)`
    }
  })), React.createElement("div", {
    className: "clock-ticks"
  }, React.createElement(ClockTicks, null)), React.createElement("div", {
    className: "clock-numbers"
  }, React.createElement(ClockNumbers, null))))));
};

AnalogClockDisplay.defaultProps = {
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
};
AnalogClockDisplay.propTypes = {
  hour: PropTypes.number,
  minute: PropTypes.number,
  second: PropTypes.number,
  millisecond: PropTypes.number,
  showSecond: PropTypes.bool.isRequired,
  showMillisecond: PropTypes.bool.isRequired
};
export { AnalogClockDisplay as default };