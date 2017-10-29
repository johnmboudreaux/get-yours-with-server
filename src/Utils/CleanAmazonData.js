export default function(amazonData) {
  return {
    amazonLink: amazonData.DetailPageURL[0] || 'none',
    imageURL: amazonData.LargeImage ? amazonData.LargeImage[0].URL[0] : 'noImage.png',
    title: amazonData.ItemAttributes[0].Title[0],
    description: amazonData.ItemAttributes[0].Feature ? amazonData.ItemAttributes[0].Feature[0] : 'No Description Provided',
    price: amazonData.OfferSummary[0].LowestNewPrice ? amazonData.OfferSummary[0].LowestNewPrice[0].FormattedPrice[0] : 'No Price Provided'
  };
}
