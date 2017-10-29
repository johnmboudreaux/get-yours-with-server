import cleanAmazonData from '../Utils/cleanAmazonData';

export const createCampingProduct = (campingProduct) => {
  return {
    type: 'CREATE_CAMPING_PRODUCT',
    campingProduct
  };
};

export const loadCampingProductSuccess = (campingProducts) => {
  return {
    type: 'LOAD_CAMPING_PRODUCTS',
    campingProducts
  };
};

export const loadCampingProducts = (keyword) => {
  return (dispatch) => {
    return fetch('/api?category=SportingGoods&keyword=camping ' + keyword)
      .then(results => {
        return results.json();
      })
      .then(productData => {
        let cleanData = [];
        productData.forEach((product) => {
          cleanData.push(cleanAmazonData(product));
        });
        dispatch(loadCampingProductSuccess(cleanData));
      });
  };
};
