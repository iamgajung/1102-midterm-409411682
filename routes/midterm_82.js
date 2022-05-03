const express = require('express');
const router = express.Router();
const Cart_82 = require('../models/Cart_82');

/* GET home page. */
router.get('/cart_82', async function(req, res, next) {
    try {
      res.render('midterm_82/cart_82', {
        id: '409411682', 
        name: 'CHIA-JUNG LEE',
        title: 'Crown2_DB' 
      });
    }catch(err){
      console.log(err);
    }
  });

router.get('/cart2_82', async function(req, res, next) {
  try {
    let results = await Cart_82.fetchCartInfo();
    console.log('cart data', JSON.stringify(results));
    let total = 0;
    for(let i=0; i<results.length; i++){
      total=total+results[i].amount * results[i].price;
    }
    console.log('total',total);
    console.log('userid',results[0].user_id);
    res.render('midterm_82/cart2_82', {
      id: results[0].user_id, 
      data: results,
      total
    });
  }catch(err){
    console.log(err);
  }
});

module.exports = router;
