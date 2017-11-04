import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import RecommendedCatalog from './Recommended';
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

describe('RecommendedCatalog', () => {

  it('should render a div with class "recommended"', () => {

    const search = shallow(
      <RecommendedCatalog  store={store} />
    );

    expect(search.find('.recommended')).toBeDefined();
  });
});

describe('RecommendedCatalog Actions', () => {

  it('createRecommendedProduct should take and array and return an action',
    () => {
      const recommendedProducts = [{
        amazonLink: "https://www.amazon.com",
        description: "prod description",
        imageURL: "https://images",
        price: "$9.97",
        title: "product title"
      }];

      const expected = {
        type: 'LOAD_RECOMMENDED_PRODUCTS',
        recommendedProducts: [{
          amazonLink: "https://www.amazon.com",
          description: "prod description",
          imageURL: "https://images",
          price: "$9.97",
          title: "product title"
        }]
      };

      expect(actions.loadRecommendedProductSuccess(recommendedProducts))
        .toEqual(expected);
    });

  it('loadRecommendedProductSuccess should take and array and return an action',
    ()=>{
      const recommendedProducts = [{
        amazonLink: "https://www.amazon.com",
        description: "prod description",
        imageURL: "https://images",
        price: "$9.97",
        title: "product title"
      }];

      const expected = {
        type: 'LOAD_RECOMMENDED_PRODUCTS',
        recommendedProducts: [{
          amazonLink: "https://www.amazon.com",
          description: "prod description",
          imageURL: "https://images",
          price: "$9.97",
          title: "product title"
        }]
      };

      expect(actions.loadRecommendedProductSuccess(recommendedProducts))
        .toEqual(expected);
    });

  it('RecommendedCatalog should always match its snapshot', () => {

    const wrapper = shallow(<RecommendedCatalog
      store = {store}
    />);

    expect(wrapper).toMatchSnapshot();
  });

});

describe('RecommendedCatalog reducers', () => {

  it('Reducer should set default state', () => {
    const expectation = [];

    expect(Reducer(undefined, {})).toEqual(expectation);
  });

  it('CREATE_RECOMMENDED_PRODUCTS should add RecommendedProducts to state',
    () => {
      const action = {
        type: 'LOAD_RECOMMENDED_PRODUCTS',
        recommendedProducts: [{
          amazonLink: "https://www.amazon.com",
          description: "product description",
          imageURL: "https://images",
          price: "$9.97",
          title: 'product title'
        }]
      };
      const expectation = action.recommendedProducts;

      expect(Reducer(undefined, action)).toEqual(expectation);
    });

});
