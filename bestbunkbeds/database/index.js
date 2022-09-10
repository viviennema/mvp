const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bunkbeds');

const userSchema = mongoose.Schema({
  username: String,
  password: String
});

const purchaseSchema = mongoose.Schema({
  username: String,
  bedModel: String,
  amount: Number
});

const productsSchema = mongoose.Schema({
  title: String,
  image: String
})

let User = mongoose.model('User', userSchema);

let Purchase = mongoose.model('Purchase', purchaseSchema);

let Product =  mongoose.model('Product', productsSchema);

module.exports = {User, Purchase, Product};


