/**
 * Created by Tobi on 17/11/2016.
 */

var path = require('path');
var app = require(path.resolve(__dirname, '../server/server'));

var ds = app.datasources.mysql;
ds.automigrate('product', function(err) {
  if (err) throw err;
  var products = [
    {
      name: 'Product A',
      price: 10
    },
    {
      name: 'Product B',
      price: 50
    }
  ];

  products.forEach(function(product, i) {
    app.models.product.create(product, function(err, model) {
      if (err) throw err;
      console.log('Created: ', model);
      if (i === products.length - 1) {
        ds.disconnect();
      }
    });
  });
});

