import { combineReducers } from 'redux';
import campingProducts from './CampingCatelog/Reducer';
import babyProducts from './BabyCatelog/Reducer';

export default combineReducers({
  campingProducts,
  babyProducts
});
