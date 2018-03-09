import 'babel-polyfill';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './App/MainApp';
import { loadCampingProducts } from './CampingCatalog/Actions';
import { loadBabyProducts } from './BabyCatalog/Actions';
import { loadRecommendedProducts } from './RecommendedCatalog/Actions';
import { loadSearchedProducts } from './AmazonSearch/Actions';
import './index.scss';
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools, applyMiddleware(thunk));
store.dispatch(loadCampingProducts());
store.dispatch(loadBabyProducts());
store.dispatch(loadRecommendedProducts());
store.dispatch(loadSearchedProducts());

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('getYoursApp')
);
