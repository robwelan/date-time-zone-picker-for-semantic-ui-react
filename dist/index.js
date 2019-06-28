'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _calendar = require('../calendar');

var _calendar2 = _interopRequireDefault(_calendar);

var _clock = require('../clock');

var _clock2 = _interopRequireDefault(_clock);

var _dateTimeZoneInput = require('../date-time-zone-input');

var _dateTimeZoneInput2 = _interopRequireDefault(_dateTimeZoneInput);

var _modal = require('../modal');

var _modal2 = _interopRequireDefault(_modal);

var _zones = require('../zones');

var _zones2 = _interopRequireDefault(_zones);

var _state2 = require('./state');

var _functions = require('./functions');

var _functions2 = require('../utilities/functions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//  Custom Components


//  State


//  Functions


//  Utilities


var DateTimeZonePicker = function (_React$Component) {
  _inherits(DateTimeZonePicker, _React$Component);

  function DateTimeZonePicker(props) {
    _classCallCheck(this, DateTimeZonePicker);

    var _this = _possibleConstructorReturn(this, (DateTimeZonePicker.__proto__ || Object.getPrototypeOf(DateTimeZonePicker)).call(this, props));

    _this.state = _state2.defaultState;

    _this.doClearValues = _this.doClearValues.bind(_this);
    _this.doShowCalendar = _this.doShowCalendar.bind(_this);
    _this.doShowClock = _this.doShowClock.bind(_this);
    _this.doShowZone = _this.doShowZone.bind(_this);
    _this.doCloseCloser = _this.doCloseCloser.bind(_this);
    _this.doShowCloser = _this.doShowCloser.bind(_this);
    _this.doShowModal = _this.doShowModal.bind(_this);
    _this.doCloseModal = _this.doCloseModal.bind(_this);
    _this.doSaveChanges = _this.doSaveChanges.bind(_this);
    _this.doSetYear = _this.doSetYear.bind(_this);
    _this.doSetMonth = _this.doSetMonth.bind(_this);
    _this.doSetDay = _this.doSetDay.bind(_this);
    _this.doSetToday = _this.doSetToday.bind(_this);
    _this.doSetHour = _this.doSetHour.bind(_this);
    _this.doSetMinute = _this.doSetMinute.bind(_this);
    _this.doSetSecond = _this.doSetSecond.bind(_this);
    _this.doSetMillisecond = _this.doSetMillisecond.bind(_this);
    _this.doSetMeridiem = _this.doSetMeridiem.bind(_this);
    _this.doSetZone = _this.doSetZone.bind(_this);
    return _this;
  }

  _createClass(DateTimeZonePicker, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.setState(function (prevState) {
        var newState = (0, _functions.setComponentDidMountState)(_this2.props, prevState);

        return newState;
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this3 = this;

      var checkPropsChanged = (0, _functions.doCheckPropsChanged)(this.props, prevProps);

      if (checkPropsChanged) {
        //  Reactjs documentation says putting setState inside a check
        //  is legal. Air-BnB does not provide adequate documentation
        //  to the contrary...
        //  eslint-disable-next-line react/no-did-update-set-state
        this.setState(function (prevState) {
          var newState = (0, _functions.setComponentDidUpdateState)(_this3.props, prevState);

          return newState;
        });
      }
    }
  }, {
    key: 'doShowCalendar',
    value: function doShowCalendar() {
      this.setState(function (prevState) {
        var newState = (0, _functions.setVisibleDate)(prevState);

        return newState;
      });
    }
  }, {
    key: 'doShowClock',
    value: function doShowClock() {
      this.setState(function (prevState) {
        var newState = (0, _functions.setVisibleTime)(prevState);

        return newState;
      });
    }
  }, {
    key: 'doShowZone',
    value: function doShowZone() {
      this.setState(function (prevState) {
        var newState = (0, _functions.setVisibleZone)(prevState);

        return newState;
      });
    }
  }, {
    key: 'doCloseCloser',
    value: function doCloseCloser() {
      this.setState(function (prevState) {
        var newState = (0, _functions.setInvisibleCloser)(prevState);

        return newState;
      });
    }
  }, {
    key: 'doShowCloser',
    value: function doShowCloser() {
      this.setState(function (prevState) {
        var newState = (0, _functions.toggleVisibleCloser)(prevState);

        return newState;
      });
    }
  }, {
    key: 'doCloseModal',
    value: function doCloseModal() {
      this.setState(function (prevState) {
        var newState = (0, _functions.setInvisibleModal)(prevState);

        return newState;
      });
    }
  }, {
    key: 'doClearValues',
    value: function doClearValues() {
      var onChange = this.props.onChange;

      this.setState(function (prevState) {
        var newState = (0, _functions.clearAllValues)(prevState);

        if (typeof onChange !== 'undefined') {
          onChange({});
        }

        return newState;
      });
    }
  }, {
    key: 'doSaveChanges',
    value: function doSaveChanges() {
      var _this4 = this;

      var onChange = this.props.onChange;

      this.setState(function (prevState) {
        var newState = (0, _functions.setInvisibleModalAndSave)(prevState, _this4.props);
        var values = newState.values;


        if (values.changed) {
          if (typeof onChange !== 'undefined') {
            onChange(values.data);
          }
        }

        return newState;
      });
    }
  }, {
    key: 'doShowModal',
    value: function doShowModal() {
      this.setState(function (prevState) {
        var newState = (0, _functions.setVisibleModal)(prevState);

        return newState;
      });
    }
  }, {
    key: 'doSetYear',
    value: function doSetYear(value) {
      this.setState(function (prevState) {
        var newState = (0, _functions.setPickerValuesDate)(prevState, 'year', value);

        return newState;
      });
    }
  }, {
    key: 'doSetMonth',
    value: function doSetMonth(value) {
      this.setState(function (prevState) {
        var newState = (0, _functions.setPickerValuesDate)(prevState, 'month', value);

        return newState;
      });
    }
  }, {
    key: 'doSetDay',
    value: function doSetDay(year, month, day) {
      var _this5 = this;

      return function () {
        _this5.setState(function (prevState) {
          var newState = (0, _functions.setPickerValuesDay)(prevState, year, month, day);

          return newState;
        });
      };
    }
  }, {
    key: 'doSetToday',
    value: function doSetToday() {
      this.setState(function (prevState) {
        var newState = (0, _functions.setPickerValuesDateToday)(prevState);

        return newState;
      });
    }
  }, {
    key: 'doSetHour',
    value: function doSetHour(value) {
      this.setState(function (prevState) {
        var newState = (0, _functions.setPickerValuesTime)(prevState, 'hour', value);

        return newState;
      });
    }
  }, {
    key: 'doSetMinute',
    value: function doSetMinute(value) {
      this.setState(function (prevState) {
        var newState = (0, _functions.setPickerValuesTime)(prevState, 'minute', value);

        return newState;
      });
    }
  }, {
    key: 'doSetSecond',
    value: function doSetSecond(value) {
      this.setState(function (prevState) {
        var newState = (0, _functions.setPickerValuesTime)(prevState, 'second', value);

        return newState;
      });
    }
  }, {
    key: 'doSetMeridiem',
    value: function doSetMeridiem(value) {
      this.setState(function (prevState) {
        var newState = (0, _functions.setPickerValuesTime)(prevState, 'meridiem', value);

        return newState;
      });
    }
  }, {
    key: 'doSetMillisecond',
    value: function doSetMillisecond(value) {
      this.setState(function (prevState) {
        var newState = (0, _functions.setPickerValuesTime)(prevState, 'millisecond', value);

        return newState;
      });
    }
  }, {
    key: 'doSetZone',
    value: function doSetZone(zone) {
      this.setState(function (prevState) {
        var newState = _extends({}, prevState, {
          picker: _extends({}, prevState.picker, {
            values: _extends({}, prevState.picker.values, {
              zone: zone
            })
          })
        });

        return newState;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          overrideSetDate = _props.setDate,
          setFirstDay = _props.setFirstDay,
          setMilliseconds = _props.setMilliseconds,
          setName = _props.setName,
          setSeconds = _props.setSeconds,
          setTime = _props.setTime,
          setTwentyFour = _props.setTwentyFour,
          setZone = _props.setZone;
      var _state = this.state,
          _state$picker = _state.picker,
          _state$picker$values = _state$picker.values,
          _state$picker$values$ = _state$picker$values.date,
          day = _state$picker$values$.day,
          month = _state$picker$values$.month,
          year = _state$picker$values$.year,
          _state$picker$values$2 = _state$picker$values.time,
          hour = _state$picker$values$2.hour,
          minute = _state$picker$values$2.minute,
          second = _state$picker$values$2.second,
          millisecond = _state$picker$values$2.millisecond,
          meridiem = _state$picker$values$2.meridiem,
          zone = _state$picker$values.zone,
          _state$picker$visible = _state$picker.visible,
          closer = _state$picker$visible.closer,
          content = _state$picker$visible.content,
          modal = _state$picker$visible.modal,
          showDate = _state$picker$visible.date,
          showTime = _state$picker$visible.time,
          showZone = _state$picker$visible.zone,
          values = _state.values;


      var setDate = (0, _functions.setOverrideForSetDate)(overrideSetDate, setTime, setZone);

      var labelDate = (0, _functions2.getFormattedDateLabel)(year, month, day);

      var labelTime = (0, _functions2.getFormattedTimeLabel)(hour, minute, second, millisecond, setSeconds, setMilliseconds, setTwentyFour);

      var labelZone = '';

      if (typeof zone !== 'undefined' && zone !== '') {
        labelZone = (0, _functions2.replaceAllCharacters)(zone, '_', ' ');
      }

      return _react2.default.createElement(
        'div',
        { className: 'date-time-zone-picker' },
        _react2.default.createElement(_dateTimeZoneInput2.default, {
          devsClasses: className,
          devsName: setName,
          doOnClick: this.doShowModal,
          setValues: values,
          setDate: setDate,
          setMilliseconds: setMilliseconds,
          setSeconds: setSeconds,
          setTime: setTime,
          setTwentyFour: setTwentyFour,
          setZone: setZone,
          onChange: this.handleInputChange
        }),
        _react2.default.createElement(
          _modal2.default,
          {
            allowDate: setDate,
            allowTime: setTime,
            allowZone: setZone,
            clearValues: this.doClearValues,
            closeCloser: this.doCloseCloser,
            showCloser: this.doShowCloser,
            showClearValues: values.changed,
            visibleCloser: closer,
            dimmedContent: content,
            showModal: this.doShowModal,
            closeModal: this.doCloseModal,
            saveChanges: this.doSaveChanges,
            visibleModal: modal,
            actShowCalendar: this.doShowCalendar,
            actShowClock: this.doShowClock,
            actShowZone: this.doShowZone,
            showDate: showDate,
            showTime: showTime,
            showZone: showZone,
            labelDate: labelDate,
            labelTime: labelTime.label,
            labelZone: labelZone
          },
          setDate && showDate && _react2.default.createElement(_calendar2.default, {
            allowDate: setDate,
            doSetYear: this.doSetYear,
            doSetMonth: this.doSetMonth,
            doSetDay: this.doSetDay,
            doSetToday: this.doSetToday,
            day: day,
            month: month,
            setFirstDay: setFirstDay,
            year: year,
            showDate: showDate
          }),
          setTime && showTime && _react2.default.createElement(_clock2.default, {
            allowClock: setTime,
            doSetHour: this.doSetHour,
            doSetMinute: this.doSetMinute,
            doSetSecond: this.doSetSecond,
            doSetMillisecond: this.doSetMillisecond,
            doSetMeridiem: this.doSetMeridiem,
            hour: hour,
            minute: minute,
            second: second,
            millisecond: millisecond,
            meridiem: meridiem,
            showMillisecond: setMilliseconds,
            showSecond: setSeconds,
            showTwentyFour: setTwentyFour,
            showTime: showTime
          }),
          setZone && showZone && _react2.default.createElement(_zones2.default, {
            allowDate: setDate,
            allowTime: setTime,
            allowZone: setZone,
            doSetZone: this.doSetZone,
            setYear: year,
            setMonth: month,
            setDay: day,
            setHour: hour,
            setMinute: minute,
            setSecond: second,
            setMillisecond: millisecond,
            showZone: showZone,
            zoneTitle: zone
          })
        )
      );
    }
  }]);

  return DateTimeZonePicker;
}(_react2.default.Component);

var detailedNow = (0, _functions.getDefaultNow)();

DateTimeZonePicker.defaultProps = {
  //  value
  value: {
    date: {
      year: detailedNow.year,
      month: detailedNow.month,
      day: detailedNow.day
    },
    time: {
      hour: detailedNow.hour,
      minute: detailedNow.minute,
      second: detailedNow.second,
      millisecond: detailedNow.millisecond
    },
    zone: detailedNow.zone
  },
  //  settings
  className: '',
  setDate: true,
  setFirstDay: 'Sunday',
  setName: '',
  setMilliseconds: false,
  setSeconds: false,
  setTwentyFour: true,
  setTime: false,
  setZone: false,
  //  functions
  onChange: undefined
};

DateTimeZonePicker.propTypes = {
  //  initial value(s):
  value: _propTypes2.default.shape({
    date: _propTypes2.default.shape({
      year: _propTypes2.default.number,
      month: _propTypes2.default.number,
      day: _propTypes2.default.number
    }),
    time: _propTypes2.default.shape({
      hour: _propTypes2.default.number,
      minute: _propTypes2.default.number,
      second: _propTypes2.default.number,
      millisecond: _propTypes2.default.number
    }),
    zone: _propTypes2.default.string
  }),
  //  settings:
  className: _propTypes2.default.string,
  setDate: _propTypes2.default.bool,
  setFirstDay: _propTypes2.default.string,
  setName: _propTypes2.default.string,
  setSeconds: _propTypes2.default.bool,
  setMilliseconds: _propTypes2.default.bool,
  setTwentyFour: _propTypes2.default.bool,
  setTime: _propTypes2.default.bool,
  setZone: _propTypes2.default.bool,
  //  functions
  onChange: _propTypes2.default.func
};

exports.default = DateTimeZonePicker;