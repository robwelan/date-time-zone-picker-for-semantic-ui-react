import { listTimeZones } from 'timezone-support';
// import { formatToTimeZone } from 'date-fns-timezone/dist/formatToTimeZone';
import {
  getFormattedOffset,
  isUnique,
  replaceAllCharacters,
  roundDownToNearestFive,
  setTimeToTimeZone,
} from '../../utilities/functions';

const getButtonValues = (
  year,
  month,
  day,
  hour,
  minute,
  region,
  zone,
  identifier
) => {
  // TODO: make sure month + 1 is not necessary...
  const actualMonth = month + 1;
  const image = region.toLowerCase();
  const time = `${year}-${actualMonth}-${day} ${hour}:${minute}`;
  const formatToTimeZoneObject = {
    timeZone: identifier,
    convertTimeZone: true,
  };
  // const formattedToTimeZone = formatToTimeZone(
  //   time,
  //   'HH:mm a',
  //   formatToTimeZoneObject
  // );
  const formattedToTimeZone = setTimeToTimeZone(
    time,
    'HH:mm a',
    formatToTimeZoneObject
  );
  // const offset = formatToTimeZone(time, 'ZZ', formatToTimeZoneObject);
  const offset = setTimeToTimeZone(time, 'ZZ', formatToTimeZoneObject);
  const formattedToTimeZoneOffset = getFormattedOffset(offset, 3, ':');
  const search = [zone, region, offset, formattedToTimeZoneOffset];

  return {
    image,
    offset: formattedToTimeZoneOffset,
    region: zone.region,
    search: search.join('|'),
    time: formattedToTimeZone,
    zone: zone.zone,
  };
};

const getZonesObject = (button = {}) => {
  const { year, month, day, hour, minute } = button;
  const roundedMinute = roundDownToNearestFive(minute);

  const zones = listTimeZones()
    .filter(region => {
      let invalid = false;
      const name = region.toLowerCase();
      /*
      Resource for deprecated time zones:
      https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
    */
      const deprecated = [
        'cet',
        'cst6cdt',
        'eet',
        'est',
        'est5edt',
        'hst',
        'met',
        'mst',
        'mst7mdt',
        'pst8pdt',
        'wet',
      ];

      if (deprecated.indexOf(name) !== -1) {
        invalid = true;
      }

      return !invalid;
    })
    .map(identifier => {
      const array = identifier.split('/');
      const region = array[0];
      const zone = replaceAllCharacters(array[array.length - 1], '_', ' ');
      const buttonValues = getButtonValues(
        year,
        month,
        day,
        hour,
        roundedMinute,
        region,
        zone,
        identifier
      );
      /*
        id needs to be in this format:
        https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
      */
      return {
        region,
        zone,
        id: identifier,
        sort: `${region}_${zone}`,
        button: buttonValues,
      };
    })
    .sort((a, b) => {
      let sort = 0;

      if (a.sort < b.sort) {
        sort = -1;
      }

      if (a.sort > b.sort) {
        sort = 1;
      }

      return sort;
    });

  return zones;
};

const getRegions = zones => {
  const regions = zones
    .map(zone => zone.region)
    .filter(isUnique)
    .sort();

  return regions;
};

const getZones = (zonesObject, region) => {
  const zones = zonesObject.filter(zone => zone.region === region);

  return zones;
};

export { getRegions, getZones, getZonesObject };
