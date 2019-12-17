import React from 'react'
import {shallow} from 'enzyme'
import PointAddForm from './PointAddForm'

describe('PointAddForm component', () => {

  const mockNameAdded = jest.fn();

  const initialState = {
    name: ''
  };

  const props = {
    onNameAdded: mockNameAdded
  };

  describe('PointAddForm component initial', () => {

    const pointAddForm = shallow(<PointAddForm {...props} />);

    it('initialize PointAddForm with initial state', () => {
      expect(pointAddForm.state()).toEqual(initialState)
    });
    
    describe('Form handlers', () => {
      
      describe('when typing into email input', () => {
        const name = 'point1000';

        beforeEach(() => {
          pointAddForm.find('.search-input').simulate('change', {
            target: {
              value: name,
            },
          })
        });

        it('updates name field in state', () => {
          expect(pointAddForm.state().name).toEqual(name)
        })
      });

      describe('when submiting the form', () => {
        beforeEach(() => {
          pointAddForm.find('.search-input').simulate('change', {
            target: {
              value: 'point999',
            },
          });
          pointAddForm.find('form').simulate('submit', {
            preventDefault: () => {},
          });
        });

        it('calls the props.onNameAdded', () => {
          expect(mockNameAdded).toHaveBeenCalledTimes(1);
        })
      });

      afterEach(() => {
        pointAddForm.setState(initialState);
      });
    });
    
  });

});