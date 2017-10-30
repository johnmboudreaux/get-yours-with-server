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
        const cleanData = productData.map((product) => {
          return cleanAmazonData(product);
        });
        dispatch(loadRecommendedProductSuccess(cleanData));
      });
  };
};

// style="width:120px;height:240px;"
// marginwidth="0"
// marginheight="0"
// scrolling="no"
// frameborder="0"
// src="//ws-na.amazon-adsystem.com/widgets/q?
// ServiceVersion=20070822&
// OneJS=1&
// Operation=GetAdHtml&
// MarketPlace=US&
// source=ac&
// ref=tf_til&
// ad_type=product_link&
// tracking_id=jhnbdrx-20&
// marketplace=amazon&
// region=US&
// placement=B01ACARBTA&
// asins=B01ACARBTA&
// linkId=4ac7a87486edcfff21745fdb52b02f82&
// show_border=true&
// link_opens_in_new_window=true&
// price_color=333333&
// title_color=0066c0&
// bg_color=f0f0f0"
