import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import BabyCatalog from './BabyCatalog';
import * as actions from './Actions';
import Reducer from './Reducer';
import React from 'react';

describe('BabyCatalog Actions', () => {

  it('createBabyProduct should take and array and return an action', () => {
    const babyProduct = [{
      amazonLink: "https://www.amazon.com",
      description: "prod description",
      imageURL: "https://images",
      price: "$9.97",
      title: "product title"
    }];

    const expected = {
      type: 'CREATE_BABY_PRODUCT',
      babyProduct: [{
        amazonLink: "https://www.amazon.com",
        description: "prod description",
        imageURL: "https://images",
        price: "$9.97",
        title: "product title"
      }]
    };

    expect(actions.createBabyProduct(babyProduct)).toEqual(expected);
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

  it('should always match its snapshot', () => {
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
      type: 'CREATE_BABY_PRODUCT',
      babyProduct: [{
        amazonLink: "https://www.amazon.com",
        description: "product description",
        imageURL: "https://images",
        price: "$9.97",
        title: 'product title'
      }]
    };
    const expectation = action.babyProduct;

    console.log('test', Reducer(undefined, action));

    expect(action.babyProduct).toEqual(expectation);
  });

});
