import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import BabyCatalog from './BabyCatalog';
import * as actions from './Actions';
import Reducer from './Reducer';
import React from 'react';

describe('BabyCatalog', () => {

  it('should render an input field', () => {
    const search = shallow(<BabyCatalog />);

    expect(search.find('.location-search')).toBeDefined();
  });

  it('updateInputValue should update the input val in state', () => {
    const initialState = '';
    console.log(initialState);

    const search = mount(<BabyCatalog
      store = {store}
    />);

  //   console.log(search);
    // const input = search.find('input');

    // expect(search.state('')).toEqual('');

    // const inputValue = { target: { value: 'Baton Rouge' } };

    // input.simulate('change', inputValue);

    // expect(search.state('location')).toEqual('Baton Rouge');
  // });

  // it('should render an button field', () => {
  //   const search = shallow(<BabyCatalog />);
  //
  //   expect(search.find('.sub-btn')).toBeDefined();
  // });


});

describe('BabyCatalog Actions', () => {

  it('createBabyProduct should take and array and return an action', () => {
    const babyProducts = [{
      amazonLink: "https://www.amazon.com",
      description: "prod description",
      imageURL: "https://images",
      price: "$9.97",
      title: "product title"
    }];

    const expected = {
      type: 'LOAD_BABY_PRODUCTS',
      babyProducts: [{
        amazonLink: "https://www.amazon.com",
        description: "prod description",
        imageURL: "https://images",
        price: "$9.97",
        title: "product title"
      }]
    };

    expect(actions.loadBabyProductSuccess(babyProducts)).toEqual(expected);
  });

  it('loadBabyProductSuccess should take and array and return an action', ()=>{
    const babyProducts = [{
      amazonLink: "https://www.amazon.com",
      description: "prod description",
      imageURL: "https://images",
      price: "$9.97",
      title: "product title"
    }];

    const expected = {
      type: 'LOAD_BABY_PRODUCTS',
      babyProducts: [{
        amazonLink: "https://www.amazon.com",
        description: "prod description",
        imageURL: "https://images",
        price: "$9.97",
        title: "product title"
      }]
    };

    expect(actions.loadBabyProductSuccess(babyProducts)).toEqual(expected);
  });

  it('BabyCatalog should always match its snapshot', () => {
    const mockStore = configureStore();
    const initialState = {
      campingProducts: [],
      babyProducts:[],
      recommendedProducts:[]
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<BabyCatalog
      store = {store}
    />);

    expect(wrapper).toMatchSnapshot();
  });

});

describe('BabyCatalog reducers', () => {

  it('Reducer should set default state', () => {
    const expectation = [];

    expect(Reducer(undefined, {})).toEqual(expectation);
  });

  it('CREATE_BABY_PRODUCT should add babyProducts to state', () => {
    const action = {
      type: 'LOAD_BABY_PRODUCTS',
      babyProducts: [{
        amazonLink: "https://www.amazon.com",
        description: "product description",
        imageURL: "https://images",
        price: "$9.97",
        title: 'product title'
      }]
    };
    const expectation = action.babyProducts;

    expect(Reducer(undefined, action)).toEqual(expectation);
  });

});
