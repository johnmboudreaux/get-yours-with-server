import cleanAmazonData from '../Utils/CleanAmazonData';

export const loadProductSuccess = (products) => ({
  type: 'LOAD_PRODUCTS',
  products
});

export const loadProducts = (keyword) => {
  return (dispatch) => {
    return fetch(`/api/amazonSearch?category=All&Keywords=${keyword}`)
      .then(results => results.json())
      .then(productData => {
        let cleanData = productData.length ?
          productData.map(product => cleanAmazonData(product)) : [];
        dispatch(loadProductSuccess(cleanData));
      })
      .catch(error => error);  
  };
};
