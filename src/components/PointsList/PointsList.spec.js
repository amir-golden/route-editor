import React from 'react';
import {mount, shallow} from 'enzyme';
import PointsList from './PointsList';

describe('PointsList component', () => {
  const mockOnPointDelete = jest.fn();

  const props = {
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
      }
    ],
    onPointDelete: mockOnPointDelete,
    onDragEnd: () => {
    }
  };

  describe('PointsList component initial', () => {
    const pointsList = mount(<PointsList {...props} />);

    it('render initial', () => {
      expect(pointsList.find('li')).toHaveLength(2)
    });

    describe('correct render for first point', () => {
      it('name', () => {
        expect(
          pointsList
            .find('li')
            .first()
            .find('span.route-name')
            .text()
        ).toEqual(props.points[0].name)
      })
    });

    describe('correct render for second point', () => {
      it('name', () => {
        expect(
          pointsList
            .find('li')
            .at(1)
            .find('span.route-name')
            .text()
        ).toEqual(props.points[1].name)
      })
    });

  })
});