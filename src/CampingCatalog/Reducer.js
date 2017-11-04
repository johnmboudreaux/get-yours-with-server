const Reducer = (state = [], action) => {
  switch (action.type) {
  case 'CREATE_CAMPING_PRODUCT':
    return [...state, Object.assign({}, action.campingProduct)];
  case 'LOAD_CAMPING_PRODUCTS':
    return action.campingProducts;
  default:
    return state;
  }
};

export default Reducer;
