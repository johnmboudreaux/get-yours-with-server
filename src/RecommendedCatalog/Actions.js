import cleanAmazonData from '../Utils/CleanAmazonData';

export const loadRecommendedProductSuccess = (recommendedProducts) => ({
  type: 'LOAD_RECOMMENDED_PRODUCTS',
  recommendedProducts
});

export const loadRecommendedProducts = () => {
  return (dispatch) => {
    return fetch(`/api/recommended`)
      .then(results => {
        return results.json();
      })
      .then(productData => {
        let cleanData = productData.length ?
          productData.map(product => cleanAmazonData(product)) : [];
        dispatch(loadRecommendedProductSuccess(cleanData));
      });
  };
};
