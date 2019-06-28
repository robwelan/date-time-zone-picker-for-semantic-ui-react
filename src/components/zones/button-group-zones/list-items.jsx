import PropTypes from 'prop-types';
import React from 'react';

// Semantic-UI
import { Button } from 'semantic-ui-react';
// Components
import ButtonContent from './button-content';

const ListItems = props => {
  const { doChooseZone, list } = props;

  const map = list.map((item, index) => {
    const { button } = item;

    return (
      // nothing unique about index
      // eslint-disable-next-line react/no-array-index-key
      <Button key={index} onClick={doChooseZone(item.id)}>
        <ButtonContent
          image={button.image}
          offset={button.offset}
          time={button.time}
          title={item.region}
          zone={item.zone}
          option={false}
        />
      </Button>
    );
  });

  return map;
};

ListItems.propTypes = {
  doChooseZone: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export { ListItems as default };
