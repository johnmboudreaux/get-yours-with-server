import { shallow } from 'enzyme';
import Header from './Header';
import React from 'react';

describe('Header snapshot', () => {

  it('should always match the snapshot', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
  });
});
