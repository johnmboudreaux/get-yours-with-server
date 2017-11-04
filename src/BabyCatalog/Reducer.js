const Reducer = (state = [], action) => {
  switch (action.type) {
  case 'CREATE_BABY_PRODUCT':
    return [...action.babyProduct];
  case 'LOAD_BABY_PRODUCTS':
    return action.babyProducts;
  default:
    return state;
  }
};

export default Reducer;
