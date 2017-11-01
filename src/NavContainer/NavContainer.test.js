import { shallow } from 'enzyme';
import NavContainer from './NavContainer';
import React from 'react';

describe('NavContainer snapshot', () => {

  it('should always match the snapshot', () => {
    const wrapper = shallow(<NavContainer />);

    expect(wrapper).toMatchSnapshot();
  });
});
