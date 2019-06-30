import PropTypes from 'prop-types';
import React from 'react'; // Semantic-UI

import { Item } from 'semantic-ui-react';

const ButtonContent = props => {
  const {
    image,
    offset,
    time,
    title,
    option,
    zone
  } = props;

  const src = require(`../../images/time-zones/100x100/${image}.png`);

  return React.createElement(React.Fragment, null, option && React.createElement(Item.Group, null, React.createElement(Item, null, React.createElement(Item.Image, {
    size: "mini",
    src: src,
    alt: image
  }), React.createElement(Item.Content, null, React.createElement(Item.Header, null, title), React.createElement(Item.Meta, null, "Show all regions")))), !option && React.createElement(Item.Group, null, React.createElement(Item, null, React.createElement(Item.Image, {
    size: "mini",
    src: src,
    alt: image
  }), React.createElement(Item.Content, null, React.createElement(Item.Header, null, zone), React.createElement(Item.Meta, null, `${time} (GMT ${offset})`), React.createElement(Item.Extra, null, title)))));
};

ButtonContent.defaultProps = {
  offset: '',
  time: '',
  zone: ''
};
ButtonContent.propTypes = {
  image: PropTypes.string.isRequired,
  offset: PropTypes.string,
  time: PropTypes.string,
  title: PropTypes.string.isRequired,
  option: PropTypes.bool.isRequired,
  zone: PropTypes.string
};
export { ButtonContent as default };