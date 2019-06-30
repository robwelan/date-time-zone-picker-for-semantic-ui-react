/*
  Properties:

  doubleAngle *
    descripton: is the icon a double angle or single angle?
    values: true: is double; false: is not double

  max *:
    description: maximum allowed value of input.
    value: a number

  min *:
    description: minimum allowed value of input.
    value: a number

  placeholder *
    description: placeholder of the input
    value: a useful description
*/
import PropTypes from 'prop-types';
import React from 'react'; //  Semantic-UI-React

import { Button, Grid, Icon, Input } from 'semantic-ui-react'; //  Functions

import { getDecrement, getIncrement, getNumericOrMinOrMax } from './functions'; //  Styling

import './index.css';

class ControlNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      max: 0,
      min: 0,
      value: 0
    };
    this.doDecrement = this.doDecrement.bind(this);
    this.doIncrement = this.doIncrement.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const {
      max,
      min,
      value
    } = this.props;
    this.setState({
      max,
      min,
      value
    });
  }

  onChange(event) {
    const {
      doChange
    } = this.props;
    const {
      value
    } = event.target;
    const {
      min,
      max
    } = this.state;
    const newValue = getNumericOrMinOrMax(min, max, value);
    this.setState(prevState => {
      const newState = { ...prevState,
        value: newValue
      };
      return newState;
    });
    doChange(newValue);
  }

  doDecrement() {
    const {
      doChange
    } = this.props;
    const {
      max,
      min,
      value
    } = this.state;
    const newValue = getDecrement(min, max, value, 1);
    this.setState(prevState => {
      const newState = { ...prevState,
        value: newValue
      };
      return newState;
    });
    doChange(newValue);
  }

  doIncrement() {
    const {
      doChange
    } = this.props;
    const {
      max,
      min,
      value
    } = this.state;
    const newValue = getIncrement(min, max, value, 1);
    this.setState(prevState => {
      const newState = { ...prevState,
        value: newValue
      };
      return newState;
    });
    doChange(newValue);
  }

  render() {
    const {
      doubleAngle,
      max,
      min,
      placeholder,
      setClassName,
      value
    } = this.props;
    let iconLeft = '';
    let iconRight = '';

    if (doubleAngle) {
      iconLeft = 'angle double left';
      iconRight = 'angle double right';
    } else {
      iconLeft = 'angle left';
      iconRight = 'angle right';
    }

    const classes = ['collapsed number-controller'];

    if (setClassName !== '') {
      classes.push(...setClassName.split(' ').trim());
    }

    return React.createElement(Grid, {
      className: classes.join(' ').trim(),
      columns: 3,
      centered: true,
      container: true
    }, React.createElement(Grid.Column, {
      width: 2
    }, React.createElement(Button, {
      icon: true,
      className: "left",
      onClick: this.doDecrement
    }, React.createElement(Icon, {
      name: iconLeft
    }))), React.createElement(Grid.Column, {
      width: 12
    }, React.createElement(Input, {
      className: "center-aligned",
      fluid: true,
      min: min,
      max: max,
      placeholder: placeholder,
      type: "number",
      value: value,
      onChange: this.onChange
    })), React.createElement(Grid.Column, {
      width: 2
    }, React.createElement(Button, {
      icon: true,
      className: "right",
      onClick: this.doIncrement
    }, React.createElement(Icon, {
      name: iconRight
    }))));
  }

}

ControlNumber.defaultProps = {
  setClassName: ''
};
ControlNumber.propTypes = {
  doChange: PropTypes.func.isRequired,
  doubleAngle: PropTypes.bool.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  setClassName: PropTypes.string
};
export { ControlNumber };