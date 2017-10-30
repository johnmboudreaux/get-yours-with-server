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

export const loadRecommendedProducts = (keyword) => {
  return (dispatch) => {
    return fetch(`/api?category=Baby&keyword=baby ${keyword}`)
      .then(results => {
        return results.json();
      })
      .then(productData => {
        let cleanData = [];
        productData.forEach((product) => {
          cleanData.push(cleanAmazonData(product));
        });
        dispatch(loadRecommendedProductSuccess(cleanData));
      });
  };
};
