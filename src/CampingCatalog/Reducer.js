const Reducer = (state = [], action) => {
  switch (action.type) {
  case 'LOAD_CAMPING_PRODUCTS':
    return action.campingProducts;
  default:
    return state;
  }
};

export default Reducer;
