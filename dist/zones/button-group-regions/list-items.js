import PropTypes from 'prop-types';
import React from 'react'; // Semantic-UI

import { Button } from 'semantic-ui-react'; // Components

import ButtonContent from './button-content';

const ListItems = props => {
  const {
    doShowRegion,
    regions
  } = props;
  const map = regions.map((region, index) => {
    const image = region.toLowerCase();
    return (// nothing unique about index
      // eslint-disable-next-line react/no-array-index-key
      React.createElement(Button, {
        key: index,
        onClick: doShowRegion(region)
      }, React.createElement(ButtonContent, {
        title: region,
        image: image
      }))
    );
  });
  return map;
};

ListItems.propTypes = {
  doShowRegion: PropTypes.func.isRequired,
  regions: PropTypes.arrayOf(PropTypes.string).isRequired
};
export { ListItems as default };