const express = require('express');
const router = express.Router();

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
  

module.exports = router;
