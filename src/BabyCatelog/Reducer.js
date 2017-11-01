const Reducer = (state = [], action) => {
  debugger
  switch (action.type) {
  case 'CREATE_BABY_PRODUCT':
    return [...state, Object.assign({}, action.babyProduct)];
  case 'LOAD_BABY_PRODUCTS':
  console.log(action.babyProducts);
    return action.babyProducts;
  default:
    return state;
  }
};

export default Reducer;
