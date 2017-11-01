import cleanAmazonData from '../Utils/cleanAmazonData';

export const createRecommendedProduct = (recommendedProduct) => {
  return {
    type: 'CREATE_RECOMMENDED_PRODUCT',
    recommendedProduct
  };
};

export const loadRecommendedProductSuccess = (recommendedProducts) => {
  return {
    type: 'LOAD_RECOMMENDED_PRODUCTS',
    recommendedProducts
  };
};

export const loadRecommendedProducts = () => {
  return (dispatch) => {
    return fetch(`/api/recommended`)
      .then(results => {
        return results.json();
      })
      .then(productData => {
        const cleanData = productData.map((product) => {
          return cleanAmazonData(product);
        });
        dispatch(loadRecommendedProductSuccess(cleanData));
      });
  };
};
