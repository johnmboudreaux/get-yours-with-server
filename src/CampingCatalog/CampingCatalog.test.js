import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import CampingCatalogContainer, { CampingCatalog } from './CampingCatalog';
import * as actions from './Actions';
import Reducer from './Reducer';
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

describe('CampingCatalog', () => {

  it('should render an input field', () => {

    const search = shallow(
      <CampingCatalogContainer  store={store} />
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
      <CampingCatalog
        campingProducts = {mockData}
      />);

    const input = search.find('input');

    expect(search.state().inputValue).toEqual('');

    const inputValue = { target: { value: 'Fire Starter' } };

    input.simulate('change', inputValue);

    expect(search.state().inputValue).toEqual('Fire Starter');
  });

  it('should render an button field', () => {
    const search = shallow(<CampingCatalogContainer store={store} />);

    expect(search.find('.sub-btn')).toBeDefined();
  });

  it('searchClick should fire an action', () => {
    const actions = {
      loadCampingProducts: jest.fn()
    };

    const search = mount(
      <CampingCatalog
        campingProducts = {[]}
        actions = {actions}
      />);

    const input = search.find('button');
    input.simulate('click');
    expect(actions.loadCampingProducts).toHaveBeenCalled();
  });

});

describe('CampingCatalog Actions', () => {

  it('createBabyProduct should take and array and return an action', () => {
    const campingProducts = [{
      amazonLink: "https://www.amazon.com",
      description: "prod description",
      imageURL: "https://images",
      price: "$9.97",
      title: "product title"
    }];

    const expected = {
      type: 'LOAD_CAMPING_PRODUCTS',
      campingProducts: [{
        amazonLink: "https://www.amazon.com",
        description: "prod description",
        imageURL: "https://images",
        price: "$9.97",
        title: "product title"
      }]
    };

    expect(actions.loadCampingProductSuccess(campingProducts))
      .toEqual(expected);
  });

  it('loadCampingProductSuccess should take and array and return an action',
    () => {
      const campingProducts = [{
        amazonLink: "https://www.amazon.com",
        description: "prod description",
        imageURL: "https://images",
        price: "$9.97",
        title: "product title"
      }];

      const expected = {
        type: 'LOAD_CAMPING_PRODUCTS',
        campingProducts: [{
          amazonLink: "https://www.amazon.com",
          description: "prod description",
          imageURL: "https://images",
          price: "$9.97",
          title: "product title"
        }]
      };

      expect(actions.loadCampingProductSuccess(campingProducts))
        .toEqual(expected);
    });

  it('CampingCatalog should always match its snapshot', () => {

    const wrapper = shallow(<CampingCatalogContainer
      store = {store}
    />);

    expect(wrapper).toMatchSnapshot();
  });

});

describe('CampingCatalog reducers', () => {

  it('Reducer should set default state', () => {
    const expectation = [];

    expect(Reducer(undefined, {})).toEqual(expectation);
  });

  it('CREATE_CAMPING_PRODUCTS should add campingProducts to state', () => {
    const action = {
      type: 'LOAD_CAMPING_PRODUCTS',
      campingProducts: [{
        amazonLink: "https://www.amazon.com",
        description: "product description",
        imageURL: "https://images",
        price: "$9.97",
        title: 'product title'
      }]
    };
    const expectation = action.campingProducts;

    expect(Reducer(undefined, action)).toEqual(expectation);
  });

});
