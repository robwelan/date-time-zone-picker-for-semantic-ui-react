import PropTypes from 'prop-types';
import React from 'react';
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Segment,
  Sidebar,
} from '../../frameworks/semantic-ui-react/scripts';
import './index.css';

const PickerCloser = ({
  animation,
  direction,
  discard,
  save,
  visible,
  setInvisibleCloser,
}) => (
  <Sidebar
    as={Segment}
    className="picker-closer"
    animation={animation}
    direction={direction}
    inverted={false}
    vertical
    visible={visible}
    width="thin"
  >
    <Segment attached="bottom">
      <Header as="h5">Are You Sure?</Header>
      <Divider />
      <Grid columns={3} textAlign="center">
        <Grid.Column>
          <Button animated="vertical" fluid onClick={save}>
            <Button.Content hidden>Save</Button.Content>
            <Button.Content visible>
              <Icon name="save" />
            </Button.Content>
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Button animated="vertical" fluid onClick={setInvisibleCloser}>
            <Button.Content hidden>Continue</Button.Content>
            <Button.Content visible>
              <Icon name="angle up" />
            </Button.Content>
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Button animated="vertical" fluid onClick={discard}>
            <Button.Content hidden>Cancel</Button.Content>
            <Button.Content visible>
              <Icon name="close" />
            </Button.Content>
          </Button>
        </Grid.Column>
      </Grid>
    </Segment>
  </Sidebar>
);

PickerCloser.propTypes = {
  animation: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  discard: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  setInvisibleCloser: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export { PickerCloser as default };
