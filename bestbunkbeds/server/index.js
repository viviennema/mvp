const express  = require('express');
const app = express();
const port = process.env.PORT || 3008;
const controller = require("../controllers/index.js");

app.use(express.static(__dirname + '/../public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/product', (req, res) => {
    controller.getAllProducts()
    .then((data) => {
      console.log('data', data);
      res.send(data);
    })
})

app.post('/purchase', (req, res) => {
  console.log("body", req.body)
  let purchase = {
    username: req.body.username,
    bedModel: req.body.bedModel,
    amount: req.body.amount
    }
   controller.savePurchaseInfo(purchase)
   .then(()=>{
    res.send('sucess!');
   })

})

app.listen(port, function(){
  console.log(`listening on port ${port}`);
});