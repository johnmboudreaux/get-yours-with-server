const Reducer = (state = [], action) => {
  switch (action.type) {
  case 'LOAD_RECOMMENDED_PRODUCTS':
    return action.recommendedProducts;
  default:
    return state;
  }
};

export default Reducer;
