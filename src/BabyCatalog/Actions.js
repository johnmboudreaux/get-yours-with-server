import cleanAmazonData from './src/Utils/cleanAmazonData';

export const loadBabyProductSuccess = (babyProducts) => ({
  type: 'LOAD_BABY_PRODUCTS',
  babyProducts
});

export const loadBabyProducts = (keyword) => {
  return (dispatch) => {
    return fetch(`/api?category=Baby&keyword=baby ${keyword}`)
      .then(results => {
        return results.json();
      })
      .then(productData => {
        let cleanData = productData.length ?
          productData.map(product => cleanAmazonData(product)) : [];
        dispatch(loadBabyProductSuccess(cleanData));
      });
  };
};
