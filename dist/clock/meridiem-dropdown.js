import PropTypes from 'prop-types';
import React from 'react'; //  Semantic-UI-React

import { Dropdown } from 'semantic-ui-react';
const options = [{
  key: 1,
  text: 'AM',
  value: 'AM'
}, {
  key: 2,
  text: 'PM',
  value: 'PM'
}];

class MeridiemDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meridiem: 'am'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const {
      meridiem
    } = this.props;
    this.setState({
      meridiem
    });
  }

  handleChange(e, {
    value
  }) {
    const {
      doSetMeridiem
    } = this.props;
    this.setState({
      meridiem: value.toLowerCase()
    });
    doSetMeridiem(value.toLowerCase());
  }

  render() {
    const {
      meridiem
    } = this.state;
    return React.createElement(Dropdown, {
      className: "meridiem-dropdown",
      fluid: true,
      onChange: this.handleChange,
      options: options,
      placeholder: "Choose 'AM' or 'PM'",
      selection: true,
      value: meridiem.toUpperCase()
    });
  }

}

MeridiemDropdown.propTypes = {
  doSetMeridiem: PropTypes.func.isRequired,
  meridiem: PropTypes.string.isRequired
};
export { MeridiemDropdown as default };