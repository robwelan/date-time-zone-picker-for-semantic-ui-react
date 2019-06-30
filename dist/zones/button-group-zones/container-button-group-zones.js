import PropTypes from 'prop-types';
import React from 'react'; // Semantic-UI

import { Button } from 'semantic-ui-react'; // Components

import ButtonContent from './button-content';
import ListItems from './list-items';

const ContainerButtonGroupZones = props => {
  const {
    doChooseZone,
    doShowRegions,
    list,
    showAllLocations
  } = props;
  return React.createElement("div", {
    className: "container-button-group-zones"
  }, React.createElement("div", {
    className: "zone-buttons"
  }, React.createElement(Button.Group, {
    basic: true,
    vertical: true
  }, React.createElement(Button, {
    onClick: doShowRegions
  }, React.createElement(ButtonContent, {
    image: "etc",
    option: true,
    title: "All Regions"
  })), showAllLocations && React.createElement(Button, null, React.createElement(ButtonContent, {
    title: "All Locations",
    image: "etc",
    option: true
  })), React.createElement(ListItems, {
    doChooseZone: doChooseZone,
    list: list
  }))));
};

ContainerButtonGroupZones.propTypes = {
  doChooseZone: PropTypes.func.isRequired,
  doShowRegions: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  showAllLocations: PropTypes.bool.isRequired
};
export { ContainerButtonGroupZones as default };