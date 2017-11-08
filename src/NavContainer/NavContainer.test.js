import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import NavContainer from './NavContainer';
import React from 'react';
import { MemoryRouter } from 'react-router';

const middleware = [];
const mockStore = configureStore(middleware);
const initialState = false;
const store = mockStore(initialState);

describe('NavContainer snapshot', () => {

  it('should always match the snapshot', () => {
    const wrapper = shallow(<NavContainer store={store} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('toggleMenu should update state', () => {
    const search = mount(<NavContainer />);

    const button = search.find('button');

    expect(search.state().menuShowing).toEqual(false);

    button.simulate('click');

    expect(search.state().menuShowing).toEqual(true);
  });

});
