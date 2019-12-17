import React from 'react';
import {shallow} from 'enzyme';
import PlacemarksList from './PlacemarksList';
import {Placemark} from 'react-yandex-maps';

describe('PlacemarksList component', () => {
  const props = {
    placemarks: [
      {
        id: 1,
        name: 'Point 1',
        coordinates: [55.50, 57.50]
      },
      {
        id: 2,
        name: 'Point 2',
        coordinates: [55.51, 57.51]
      },
      {
        id: 3,
        name: 'Point 3',
        coordinates: [55.52, 57.52]
      },
      {
        id: 4,
        name: 'Point 4',
        coordinates: [55.53, 57.53]
      }
    ],
    onPlacemarkDrag: () => {
    },
  };

  describe('PlacemarksList component initial', () => {
    const placemarksList = shallow(<PlacemarksList {...props} />);

    it('render initial', () => {
      expect(placemarksList.find(Placemark)).toHaveLength(4)
    });

  })
});