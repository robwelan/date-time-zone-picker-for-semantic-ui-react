import PropTypes from 'prop-types';
import React from 'react';

// Semantic-UI
import { Item } from 'semantic-ui-react';

const ButtonContent = (props) => {
  const { title, image } = props;
  const src = require(`../../images/time-zones/100x100/${image}.png`);

  return (
    <Item.Group>
      <Item>
        <Item.Image
          size="mini"
          src={src}
          alt={image}
        />
        <Item.Content>
          <Item.Header>{title}</Item.Header>
          <Item.Meta>timezones</Item.Meta>
        </Item.Content>
      </Item>
    </Item.Group>
  );
};

ButtonContent.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export { ButtonContent as default };
