import cleanAmazonData from '../Utils/CleanAmazonData';

export const loadSearchedProductSuccess = (searchedProducts) => ({
  type: 'LOAD_SEARCHED_PRODUCTS',
  searchedProducts
});

export const loadSearchedProducts = (keyword) => {
  return (dispatch) => {
    return fetch(`/api/amazonSearch?category=All&keyword=${keyword}`)
      .then((results) => {
        return results.json();
      })
      .then(productData => {
        let cleanData = productData.length ?
          productData.map(product => cleanAmazonData(product)) : [];
        dispatch(loadSearchedProductSuccess(cleanData));
      })
      .catch(error => error);
  };
};
