import PropTypes from 'prop-types';
import React from 'react'; //  Semantic-UI-React

import { Button, Divider, Grid, Header, Icon, Segment, Sidebar } from 'semantic-ui-react'; //  Styles

import './index.css';

const PickerCloser = ({
  animation,
  direction,
  discard,
  save,
  visible,
  setInvisibleCloser
}) => React.createElement(Sidebar, {
  as: Segment,
  className: "picker-closer",
  animation: animation,
  direction: direction,
  inverted: false,
  vertical: true,
  visible: visible,
  width: "thin"
}, React.createElement(Segment, {
  attached: "bottom"
}, React.createElement(Header, {
  as: "h5"
}, "Are You Sure?"), React.createElement(Divider, null), React.createElement(Grid, {
  columns: 3,
  textAlign: "center"
}, React.createElement(Grid.Column, null, React.createElement(Button, {
  animated: "vertical",
  fluid: true,
  onClick: save
}, React.createElement(Button.Content, {
  hidden: true
}, "Save"), React.createElement(Button.Content, {
  visible: true
}, React.createElement(Icon, {
  name: "save"
})))), React.createElement(Grid.Column, null, React.createElement(Button, {
  animated: "vertical",
  fluid: true,
  onClick: setInvisibleCloser
}, React.createElement(Button.Content, {
  hidden: true
}, "Continue"), React.createElement(Button.Content, {
  visible: true
}, React.createElement(Icon, {
  name: "angle up"
})))), React.createElement(Grid.Column, null, React.createElement(Button, {
  animated: "vertical",
  fluid: true,
  onClick: discard
}, React.createElement(Button.Content, {
  hidden: true
}, "Cancel"), React.createElement(Button.Content, {
  visible: true
}, React.createElement(Icon, {
  name: "close"
})))))));

PickerCloser.propTypes = {
  animation: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  discard: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  setInvisibleCloser: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired
};
export { PickerCloser as default };