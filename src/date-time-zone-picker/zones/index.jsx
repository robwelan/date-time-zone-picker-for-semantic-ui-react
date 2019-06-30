import PropTypes from 'prop-types';
import React from 'react';

//  Semantic-UI-React
import { Grid, Ref } from 'semantic-ui-react';

//  Components
import ButtonGroupRegions from './button-group-regions';
import ButtonGroupZones from './button-group-zones';
import PresentChange from '../present-change';
import SelectedZone from './selected-zone';

//  Functions
import { getRegions, getZonesObject } from './functions';

//  Styles
import './index.css';

class Zones extends React.Component {
  constructor(props) {
    super(props);

    this.refZone = React.createRef();

    this.state = {
      selection: {
        filter: '',
        region: '',
        zone: '',
      },
      visible: {
        regions: false,
        zones: false,
        region: true,
        zone: true,
        control: {
          allLocations: true,
        },
      },
      zones: {
        filtered: [],
        main: [],
        regions: [],
        work: [],
      },
    };

    this.chooseRegion = this.chooseRegion.bind(this);
    this.chooseZone = this.chooseZone.bind(this);
    this.onChangeFilter = this.onChangeFilter.bind(this);
    this.showRegion = this.showRegion.bind(this);
    this.showRegions = this.showRegions.bind(this);
    this.showZones = this.showZones.bind(this);
  }

  componentDidMount() {
    const { setYear, setMonth, setDay, setHour, setMinute } = this.props;
    const filter = '';
    const button = {
      year: setYear,
      month: setMonth,
      day: setDay,
      hour: setHour,
      minute: setMinute,
    };
    const main = getZonesObject(button);
    const regions = getRegions(main);

    this.setState({
      selection: {
        id: '',
        filter,
        region: '',
        zone: '',
      },
      visible: {
        regions: false,
        zones: false,
        region: true,
        zone: true,
        control: {
          allLocations: true,
        },
      },
      zones: {
        filtered: main,
        main,
        regions,
        work: main,
      },
    });
  }

  onChangeFilter(e) {
    const input = e.target.value || '';
    const {
      zones: { work },
    } = this.state;
    let filtered = work;

    if (input !== '') {
      filtered = work.filter(item =>
        item.button.search.toLowerCase().includes(input.toLowerCase())
      );
    }

    this.setState((prevState) => {
      const newState = {
        ...prevState,
        selection: {
          ...prevState.selection,
          filter: input,
        },
        zones: {
          ...prevState.zones,
          filtered,
        },
      };

      return newState;
    });
  }

  chooseRegion() {
    return () => {
      this.setState((prevState) => {
        const newState = {
          ...prevState,
          selection: {
            filter: '',
            id: '',
            region: '',
            zone: '',
          },
          visible: {
            regions: false,
            zones: true,
            region: false,
            zone: false,
            control: {
              allLocations: false,
            },
          },
        };

        return newState;
      });
    };
  }

  chooseZone(zone) {
    const { doSetZone } = this.props;

    return () => {
      doSetZone(zone);
      this.setState((prevState) => {
        const newState = {
          ...prevState,
          selection: {
            ...prevState.selection,
            id: zone,
          },
          visible: {
            regions: false,
            zones: false,
            region: true,
            zone: true,
            control: {
              allLocations: true,
            },
          },
        };

        return newState;
      });
    };
  }

  showRegion(region) {
    return () => {
      const {
        zones: { work },
      } = this.state;
      const filtered = work.filter(
        item => item.region.toLowerCase() === region.toLowerCase()
      );

      this.setState((prevState) => {
        const newState = {
          ...prevState,
          selection: {
            ...prevState.selection,
            filter: '',
          },
          visible: {
            regions: false,
            zones: true,
            region: false,
            zone: false,
            control: {
              allLocations: false,
            },
          },
          zones: {
            ...prevState.zones,
            filtered,
            work: filtered,
          },
        };

        return newState;
      });
    };
  }

  showRegions() {
    const {
      zones: { main },
    } = this.state;

    this.setState((prevState) => {
      const newState = {
        ...prevState,
        selection: {
          ...prevState.selection,
          filter: '',
        },
        visible: {
          regions: true,
          zones: false,
          region: false,
          zone: false,
          control: {
            allLocations: true,
          },
        },
        zones: {
          ...prevState.zones,
          filtered: main,
          work: main,
        },
      };

      return newState;
    });
  }

  showZones() {
    this.setState((prevState) => {
      const newState = {
        ...prevState,
        visible: {
          regions: false,
          zones: true,
          region: false,
          zone: false,
          control: {
            allLocations: true,
          },
        },
      };

      return newState;
    });
  }

  render() {
    const { allowZone, showZone, zoneTitle } = this.props;
    const {
      selection: { filter },
      visible: {
        regions: visibleRegions,
        zones: visibleZones,
        region: visibleRegion,
        zone: visibleZone,
        control: { allLocations: visibleAllLocationsControl },
      },
      zones: { filtered: zonesMain, regions: zonesRegions },
    } = this.state;

    return (
      <React.Fragment>
        {allowZone && showZone && (
          <Ref innerRef={this.refZone}>
            <Grid className="zone" columns={1} container>
              <PresentChange icon="world" label="Change Timezone">
                {visibleRegion && visibleZone && (
                  <SelectedZone
                    doShowRegions={this.showRegions}
                    doShowZones={this.showZones}
                    zoneTitle={zoneTitle}
                  />
                )}
                {visibleRegions && (
                  <ButtonGroupRegions
                    doChooseRegion={this.chooseRegion}
                    doShowRegion={this.showRegion}
                    doShowZones={this.showZones}
                    regions={zonesRegions}
                  />
                )}
                {visibleZones && (
                  <ButtonGroupZones
                    allZones={zonesMain}
                    doChooseZone={this.chooseZone}
                    inputOnChangeFilter={this.onChangeFilter}
                    inputSearchValue={filter}
                    doShowRegions={this.showRegions}
                    showAllLocations={visibleAllLocationsControl}
                  />
                )}
              </PresentChange>
            </Grid>
          </Ref>
        )}
      </React.Fragment>
    );
  }
}

Zones.propTypes = {
  allowZone: PropTypes.bool.isRequired,
  doSetZone: PropTypes.func.isRequired,
  setYear: PropTypes.number.isRequired,
  setMonth: PropTypes.number.isRequired,
  setDay: PropTypes.number.isRequired,
  setHour: PropTypes.number.isRequired,
  setMinute: PropTypes.number.isRequired,
  showZone: PropTypes.bool.isRequired,
  zoneTitle: PropTypes.string.isRequired,
};

export { Zones as default };
