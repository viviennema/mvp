const {User, Purchase, Product} = require ('../database/index.js');


const getAllProducts = function() {

    return Product.find({})
}

const savePurchaseInfo = function(data) {
  const purchase = new Purchase(data);
  console.log('data', data);
  return purchase.save();
  };

module.exports = {getAllProducts, savePurchaseInfo};