const Reducer = (state = [], action) => {
  switch (action.type) {
  case 'LOAD_PRODUCTS':
    return action.products;
  default:
    return state;
  }
};

export default Reducer;
