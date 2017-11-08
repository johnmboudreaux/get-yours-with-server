import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import NavContainer from './NavContainer';
import React from 'react';
import { PropTypes } from 'prop-types';
import createRouterContext from 'react-router-test-context';

const middleware = [];
const mockStore = configureStore(middleware);
const initialState = false;
const store = mockStore(initialState);

describe('NavContainer snapshot', () => {

  it('should always match the snapshot', () => {
    const wrapper = shallow(<NavContainer store={store} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('state should update on click of button', () => {
    const context = createRouterContext();
    NavContainer.contextTypes = {
      router: PropTypes.object
    };
    const wrapper = mount(<NavContainer />, { context });
    const button = wrapper.find('button');

    expect(wrapper.state().menuShowing).toEqual(false);

    button.simulate('click');

    expect(wrapper.state().menuShowing).toEqual(true);
  });

  it('toggleMenu changes state', () => {
    const context = createRouterContext();
    NavContainer.contextTypes = {
      router: PropTypes.object
    };
    const wrapper = mount(<NavContainer />, { context });

    expect(wrapper.state().menuShowing).toEqual(false);

    wrapper.instance().toggleMenu();

    expect(wrapper.state().menuShowing).toEqual(true);
  });

});
