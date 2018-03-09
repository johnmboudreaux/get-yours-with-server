import { shallow } from 'enzyme';
import { Search } from './Search';
import React from 'react';

describe('Search snapshot', () => {

  it('should always match the snapshot', () => {
    const wrapper = shallow(<Search />);

    expect(wrapper).toMatchSnapshot();
  });
});
