import { combineReducers } from 'redux';
import campingProducts from './CampingCatelog/Reducer';
import babyProducts from './BabyCatelog/Reducer';
import recommendedProducts from './RecommendedCatelog/Reducers';

export default combineReducers({
  campingProducts,
  babyProducts,
  recommendedProducts
});
