import { combineReducers } from 'redux';
import campingProducts from './CampingCatalog/Reducer';
import babyProducts from './BabyCatalog/Reducer';
import recommendedProducts from './RecommendedCatalog/Reducers';

export default combineReducers({
  campingProducts,
  babyProducts,
  recommendedProducts
});
