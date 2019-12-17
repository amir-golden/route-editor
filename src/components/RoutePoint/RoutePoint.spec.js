// describe('when deleting first point', () => {
//   pointsList.find('li').at(1).find('.btn.btn-outline-success.btn-sm').simulate('click');
//
//   it('calls the props.onPointDelete', () => {
//     expect(mockOnPointDelete).toHaveBeenCalledTimes(1);
//   });
//
// });

import React from 'react';
import {shallow} from 'enzyme';
import RoutePoint from './RoutePoint';

describe('RoutePoint component', () => {
  const mockOnPointDelete = jest.fn();

  const props = {
    name: 'Point 00000',
    onPointDelete: mockOnPointDelete
  };

  const routePointComponent = shallow(<RoutePoint {...props} />);

  describe('when deleting this point', () => {
    routePointComponent.find('.btn.btn-outline-success.btn-sm').simulate('click');
    
    it('calls the props.onPointDelete', () => {
      expect(mockOnPointDelete).toHaveBeenCalledTimes(1);
    });

  });

});