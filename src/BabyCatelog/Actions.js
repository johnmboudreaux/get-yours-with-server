import cleanAmazonData from '../Utils/cleanAmazonData';

export const createBabyProduct = (babyProduct) => {
  return {
    type: 'CREATE_BABY_PRODUCT',
    babyProduct
  };
};

export const loadBabyProductSuccess = (babyProducts) => {
  return {
    type: 'LOAD_BABY_PRODUCTS',
    babyProducts
  };
};

export const loadBabyProducts = (keyword) => {
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
        dispatch(loadBabyProductSuccess(cleanData));
      });
  };
};
