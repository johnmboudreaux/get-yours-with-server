const path = require('path');
const express = require('express');
const cors = require('express-cors');
const port = 8080;
const app = express();
const open = require('open');
const keys = require('./keys/apiKey');
const amazon = require('amazon-product-api');
const client = amazon.createClient({
  awsId: keys.databaseID,
  awsSecret: keys.databaseKey,
  awsTag: "jhnbdrx-20"
});

app.use(cors());

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('./webpack.config.dev.js');
  const compiler = webpack(config);

  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
}

app.use(express.static('www'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'www/index.html'));
});

app.get('/api', function(req, res) {
  client.itemSearch({
    SearchIndex: req.query.category,
    Keywords: req.query.keyword,
    responseGroup: 'ItemAttributes,Offers,Images'
  }, function(error, results, response) {
    if (error) {
      res.json(error);
    } else {
      res.json(results);
    }
  });
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'www/index.html'));
});

app.listen(port);

console.log(`Listening at http://localhost:${port}`);

open(`http://localhost:${port}`);
