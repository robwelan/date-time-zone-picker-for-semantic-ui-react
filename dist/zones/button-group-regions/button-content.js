import PropTypes from 'prop-types';
import React from 'react'; // Semantic-UI

import { Item } from 'semantic-ui-react';

const ButtonContent = props => {
  const {
    title,
    image
  } = props;

  const src = require(`../../images/time-zones/100x100/${image}.png`);

  return React.createElement(Item.Group, null, React.createElement(Item, null, React.createElement(Item.Image, {
    size: "mini",
    src: src,
    alt: image
  }), React.createElement(Item.Content, null, React.createElement(Item.Header, null, title), React.createElement(Item.Meta, null, "timezones"))));
};

ButtonContent.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
export { ButtonContent as default };