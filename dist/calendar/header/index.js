import PropTypes from 'prop-types';
import React from 'react'; //  Semantic-UI-React

import { Divider, Grid } from 'semantic-ui-react'; //  Titles

import { Titles } from './titles';

const Header = props => {
  const {
    firstDay
  } = props;
  return React.createElement(React.Fragment, null, React.createElement(Divider, {
    className: "day-title-divider-top"
  }), React.createElement(Grid, {
    columns: 7,
    container: true
  }, React.createElement(Titles, {
    firstDay: firstDay
  })), React.createElement(Divider, {
    className: "day-title-divider-bottom"
  }));
};

Header.propTypes = {
  firstDay: PropTypes.number.isRequired
};
export { Header };