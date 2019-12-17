import React from 'react'
import { shallow } from 'enzyme'
import PlacemarksList from '../PlacemarksList'
import MyMap from './MyMap'

describe('MyMap component', () => {
  const props = {
    defaultState: {center: [55.796289, 49.108795], zoom: 15},
    points: [
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
      }
    ],
    onInstanceUpdate: () => {},
    onPlacemarkDrag: () => {}
  };

  describe('MyMap component initial', () => {
    const mockFetchOnInstanceUpdate = jest.fn(); // создали mock-функцию
    const nextProps = {
      ...props,
      onInstanceUpdate: mockFetchOnInstanceUpdate,
    };
    
    const myMapComponent= shallow(<MyMap {...nextProps} />);

    it('render initial', () => {
      expect(myMapComponent.find(PlacemarksList)).toHaveLength(1);
    });
    
  });
  
});