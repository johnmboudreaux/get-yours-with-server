import cleanAmazonData from '../Utils/CleanAmazonData';

export const loadProductSuccess = (products) => ({
  type: 'LOAD_PRODUCTS',
  products
});

export const loadProducts = (keyword) => {
  return (dispatch) => {
    return fetch(`/api?category=TopSellers&keyword=TopSellers ${keyword}`)
      .then(results => {
        return results.json();
      })
      .then(productData => {
        let cleanData = productData.length ?
          productData.map(product => cleanAmazonData(product)) : [];
        dispatch(loadProductSuccess(cleanData));
      });
  };
};
