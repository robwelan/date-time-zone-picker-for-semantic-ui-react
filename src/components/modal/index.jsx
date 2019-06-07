import PropTypes from 'prop-types';
import React from 'react';

//  Semantic-UI-React
import {
  Button,
  Card,
  Container,
  Grid,
  Icon,
  Label,
  Modal,
  Sidebar,
} from '../../frameworks/semantic-ui-react/scripts';

//  Components
import ChangeControls from '../change-controls';
import ControlButtons from './control-buttons';
import PickerCloser from '../picker-closer';

//  Styles
import './index.css';

/*
  paint the main container that holds everything else
*/
const ModalMain = props => {
  const {
    allowDate,
    allowTime,
    allowZone,
    clearValues,
    children,
    dimmedContent,
    showCloser,
    showClearValues,
    closeCloser,
    showModal,
    closeModal,
    saveChanges,
    visibleCloser,
    visibleModal,
    actShowCalendar,
    actShowClock,
    actShowZone,
    showDate,
    showTime,
    showZone,
    labelDate,
    labelTime,
    labelZone,
  } = props;

  const ControlButtonProps = {
    doClearValues: clearValues,
    doShowModal: showModal,
    showClearButton: showClearValues,
  };

  const getCloserLabel = () => {
    if (visibleCloser) {
      return 'Continue';
    }
    return 'Back';
  };

  const getCloserIcon = () => {
    if (visibleCloser) {
      return 'down';
    }

    return 'left';
  };

  return (
    <Modal
      className="modal-date-time-zone-picker"
      closeOnEscape={false}
      closeOnDimmerClick={false}
      dimmer="blurring"
      open={visibleModal}
      onClose={() => closeModal()}
      trigger={<ControlButtons {...ControlButtonProps} />}
    >
      <div className="all-picker-content">
        <div className="main-controls">
          <Grid centered columns={1} container padded>
            <Card>
              <Card.Content>
                <Card.Header>
                  <Button as="div" floated="left" labelPosition="right">
                    <Button icon onClick={showCloser}>
                      <Icon name={`angle ${getCloserIcon()}`} />
                    </Button>
                    <Label as="a" basic onClick={showCloser}>
                      {getCloserLabel()}
                    </Label>
                  </Button>
                  {allowDate && (allowTime || allowZone) && (
                    <ChangeControls
                      actions={{
                        showDate: actShowCalendar,
                        showTime: actShowClock,
                        showZone: actShowZone,
                      }}
                      visible={{
                        date: showDate,
                        time: showTime,
                        zone: showZone,
                      }}
                      allowZone={allowZone}
                      allowDate={allowDate}
                      allowTime={allowTime}
                    />
                  )}
                </Card.Header>
                {allowDate && (allowTime || allowZone) && (
                  <Card.Description>
                    {allowDate && !showDate && (
                      <p>
                        <Icon name="calendar alternate outline" />
                        {labelDate}
                      </p>
                    )}
                    {allowTime && !showTime && (
                      <p>
                        <Icon name="clock outline" />
                        {labelTime}
                      </p>
                    )}
                    {allowZone && !showZone && (
                      <p>
                        <Icon name="world" />
                        {labelZone}
                      </p>
                    )}
                  </Card.Description>
                )}
              </Card.Content>
            </Card>
          </Grid>
        </div>
        <div className="all-sidebar-content">
          <Sidebar.Pushable as={Container}>
            <PickerCloser
              animation="scale down"
              direction="bottom"
              visible={visibleCloser}
              setInvisibleCloser={closeCloser}
              discard={closeModal}
              save={saveChanges}
            />

            <Sidebar.Pusher dimmed={!dimmedContent}>
              <Container className="picker-content">{children}</Container>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      </div>
    </Modal>
  );
};

ModalMain.propTypes = {
  allowDate: PropTypes.bool.isRequired,
  allowTime: PropTypes.bool.isRequired,
  allowZone: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  clearValues: PropTypes.func.isRequired,
  closeCloser: PropTypes.func.isRequired,
  showCloser: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  showClearValues: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  saveChanges: PropTypes.func.isRequired,
  visibleCloser: PropTypes.bool.isRequired,
  dimmedContent: PropTypes.bool.isRequired,
  visibleModal: PropTypes.bool.isRequired,
  actShowCalendar: PropTypes.func.isRequired,
  actShowClock: PropTypes.func.isRequired,
  actShowZone: PropTypes.func.isRequired,
  showDate: PropTypes.bool.isRequired,
  showTime: PropTypes.bool.isRequired,
  showZone: PropTypes.bool.isRequired,
  labelDate: PropTypes.string.isRequired,
  labelTime: PropTypes.string.isRequired,
  labelZone: PropTypes.string.isRequired,
};

export { ModalMain as default };
