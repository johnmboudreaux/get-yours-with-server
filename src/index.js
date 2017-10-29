import 'babel-polyfill';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './App/MainApp';
import { loadCampingProducts } from './CampingCatelog/Actions';
import { loadBabyProducts } from './BabyCatelog/Actions';
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools, applyMiddleware(thunk));
store.dispatch(loadCampingProducts());
store.dispatch(loadBabyProducts());

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('getYoursApp')
);
