const Reducer = (state = [], action) => {
  switch (action.type) {
  case 'CREATE_RECOMMENDED_PRODUCT':
    return [...state, Object.assign({}, action.babyProduct)];
  case 'LOAD_RECOMMENDED_PRODUCTS':
    return action.recommendedProducts;
  default:
    return state;
  }
};

export default Reducer;
