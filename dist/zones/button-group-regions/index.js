import PropTypes from 'prop-types';
import React from 'react'; //  Semantic-UI

import { Button } from 'semantic-ui-react'; //  Components

import ButtonContent from './button-content';
import ListItems from './list-items';

const ButtonGroupRegions = props => {
  const {
    doChooseRegion,
    doShowRegion,
    regions
  } = props;
  return React.createElement("div", {
    className: "container-button-group-regions"
  }, React.createElement("div", {
    className: "region-buttons"
  }, React.createElement(Button.Group, {
    basic: true,
    vertical: true
  }, React.createElement(Button, {
    onClick: doChooseRegion('all-locations')
  }, React.createElement(ButtonContent, {
    title: "All Locations",
    image: "etc"
  })), React.createElement(ListItems, {
    doShowRegion: doShowRegion,
    regions: regions
  }))));
};

ButtonGroupRegions.propTypes = {
  doChooseRegion: PropTypes.func.isRequired,
  doShowRegion: PropTypes.func.isRequired,
  regions: PropTypes.arrayOf(PropTypes.string).isRequired
};
export { ButtonGroupRegions as default };