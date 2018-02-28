import cleanAmazonData from './Utils/cleanAmazonData';

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
        let cleanData = productData.length ?
          productData.map(product => cleanAmazonData(product)) : [];
        dispatch(loadCampingProductSuccess(cleanData));
      });
  };
};
