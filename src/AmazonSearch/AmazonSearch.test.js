import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import AmazonSearchContainer, { AmazonSearch } from './AmazonSearch';
import * as actions from './Actions';
import Reducer from './Reducers';
import React from 'react';

const middleware = [];
const mockStore = configureStore(middleware);
const initialState = {
  amazonLink: "https://www.amazon.com",
  description: "prod description",
  imageURL: "https://images",
  price: "$9.97",
  title: "product title"
};
const store = mockStore(initialState);

describe('AmazonSearch', () => {

  it('should render an input field', () => {

    const search = shallow(
      <AmazonSearchContainer  store={store} />
    );

    expect(search.find('.header-input')).toBeDefined();
  });

  it('updateInputValue should update the input val in state', () => {
    const mockData = [{
      amazonLink: "https://www.amazon.com",
      description: "prod description",
      imageURL: "https://images",
      price: "$9.97",
      title: "product title"
    }];
    const search = mount(
      <AmazonSearch
        searchedProducts = {mockData}
      />);

    const input = search.find('input');

    expect(search.state().inputValue).toEqual('');

    const inputValue = { target: { value: 'Baton Rouge' } };

    input.simulate('change', inputValue);

    expect(search.state().inputValue).toEqual('Baton Rouge');
  });

  it('should render an button field', () => {
    const search = shallow(<AmazonSearchContainer store={store} />);

    expect(search.find('.sub-btn')).toBeDefined();
  });

  it('searchClick shold fire an action', () => {
    const actions = {
      loadSearchedProducts: jest.fn()
    };

    const search = mount(
      <AmazonSearch
        searchedProducts = {[]}
        actions = {actions}
      />);

    const input = search.find('button');
    input.simulate('click');
    expect(actions.loadSearchedProducts).toHaveBeenCalled();
  });


});

describe('AmazonSearch Actions', () => {

  it('createSearchedProduct should take and array and return an action', () => {
    const searchedProducts = [{
      amazonLink: "https://www.amazon.com",
      description: "prod description",
      imageURL: "https://images",
      price: "$9.97",
      title: "product title"
    }];

    const expected = {
      type: 'LOAD_SEARCHED_PRODUCTS',
      searchedProducts: [{
        amazonLink: "https://www.amazon.com",
        description: "prod description",
        imageURL: "https://images",
        price: "$9.97",
        title: "product title"
      }]
    };

    expect(actions.loadSearchedProductSuccess(searchedProducts)).toEqual(expected);
  });

  it('loadSearchedProductSuccess should take and array and return an action', ()=>{
    const searchedProducts = [{
      amazonLink: "https://www.amazon.com",
      description: "prod description",
      imageURL: "https://images",
      price: "$9.97",
      title: "product title"
    }];

    const expected = {
      type: 'LOAD_SEARCHED_PRODUCTS',
      searchedProducts: [{
        amazonLink: "https://www.amazon.com",
        description: "prod description",
        imageURL: "https://images",
        price: "$9.97",
        title: "product title"
      }]
    };

    expect(actions.loadSearchedProductSuccess(searchedProducts)).toEqual(expected);
  });

  it('AmazonSearch should always match its snapshot', () => {

    const wrapper = shallow(<AmazonSearchContainer
      store = {store}
    />);

    expect(wrapper).toMatchSnapshot();
  });

});

describe('AmazonSearch reducers', () => {

  it('Reducer should set default state', () => {
    const expectation = [];

    expect(Reducer(undefined, {})).toEqual(expectation);
  });

  it('LOAD_SEARCHED_PRODUCT should add searchedProducts to state', () => {
    const action = {
      type: 'LOAD_SEARCHED_PRODUCTS',
      searchedProducts: [{
        amazonLink: "https://www.amazon.com",
        description: "product description",
        imageURL: "https://images",
        price: "$9.97",
        title: 'product title'
      }]
    };
    const expectation = action.searchedProducts;

    expect(Reducer(undefined, action)).toEqual(expectation);
  });

});
