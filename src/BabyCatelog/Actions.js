import cleanAmazonData from '../Utils/cleanAmazonData';

export const createBabyProduct = (babyProduct) => ({
  type: 'CREATE_BABY_PRODUCT',
  babyProduct
});

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
        let cleanData = [];
        productData.forEach((product) => {
          cleanData.push(cleanAmazonData(product));
        });
        console.log('load success', loadBabyProductSuccess(cleanData));
        dispatch(loadBabyProductSuccess(cleanData));
      });
  };
};
