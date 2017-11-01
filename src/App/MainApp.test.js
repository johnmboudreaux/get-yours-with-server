import { shallow } from 'enzyme';
import MainApp from './MainApp';
import React from 'react';

describe('MainApp snapshot', () => {

  it('should always match the snapshot', () => {
    const wrapper = shallow(<MainApp />);

    expect(wrapper).toMatchSnapshot();
  });
});
