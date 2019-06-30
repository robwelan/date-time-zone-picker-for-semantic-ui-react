import PropTypes from 'prop-types';
import React from 'react'; // Semantic-UI

import { Button, Item, Grid } from 'semantic-ui-react';

const SelectedZone = props => {
  const {
    doShowRegions,
    zoneTitle
  } = props;
  const buttons = zoneTitle.split('/').map((value, index) => {
    const type = index === 0 ? 'Region' : 'Zone';
    return React.createElement(Button // nothing unique about index
    // eslint-disable-next-line react/no-array-index-key
    , {
      key: index,
      onClick: doShowRegions
    }, React.createElement(Item.Group, null, React.createElement(Item, null, React.createElement(Item.Content, null, React.createElement(Item.Header, null, value), React.createElement(Item.Extra, null, type)))));
  });
  return React.createElement(Grid, {
    className: "timezone-controls",
    container: true
  }, React.createElement(Button.Group, {
    basic: true,
    vertical: true
  }, buttons));
};

SelectedZone.propTypes = {
  doShowRegions: PropTypes.func.isRequired,
  zoneTitle: PropTypes.string.isRequired
};
export { SelectedZone as default };