export default function(amazonData) {
  let returnObject = {
    amazonLink: "None",
    imageURL: "noImage.png",
    title: "No Title Provided",
    description: "No Description Provided",
    price: "No Price Provided"
  };

  if (amazonData.DetailPageURL) {
    returnObject.amazonLink = amazonData.DetailPageURL[0];
  }

  if (amazonData.LargeImage && amazonData.LargeImage[0].URL) {
    returnObject.imageURL = amazonData.LargeImage[0].URL[0];
  }

  if (amazonData.ItemAttributes && amazonData.ItemAttributes[0].Title) {
    returnObject.title = amazonData.ItemAttributes[0].Title[0];
  }

  if (amazonData.ItemAttributes && amazonData.ItemAttributes[0].Feature) {
    returnObject.description = amazonData.ItemAttributes[0].Feature[0];
  }

  if (amazonData.OfferSummary && amazonData.OfferSummary[0].LowestNewPrice &&
    amazonData.OfferSummary[0].LowestNewPrice[0].FormattedPrice) {
    returnObject.price = amazonData
      .OfferSummary[0]
      .LowestNewPrice[0]
      .FormattedPrice[0];
  }

  return returnObject;
}
