import cleanAmazonData from '../Utils/CleanAmazonData';

export const loadSearchedProductSuccess = (searchedProducts) => ({
  type: 'LOAD_SEARCHED_PRODUCTS',
  searchedProducts
});

export const loadSearchedProducts = (keyword) => {
  return (dispatch) => {
    return fetch(`/api?category=All&keyword=TopSellers ${keyword}`)
      .then(results => results.json())
      .then(productData => {
        let cleanData = productData.length ?
          productData.map(product => cleanAmazonData(product)) : [];
        dispatch(loadSearchedProductSuccess(cleanData));
      });
  };
};
