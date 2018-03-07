const Reducer = (state = [], action) => {
  switch (action.type) {
  case 'LOAD_SEARCHED_PRODUCTS':
    return action.searchedProducts;
  default:
    return state;
  }
};

export default Reducer;
