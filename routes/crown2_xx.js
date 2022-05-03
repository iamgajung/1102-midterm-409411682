var express = require('express');
var router = express.Router();

const Category_xx = require('../models/Category_xx');
const Shop_xx = require('../models/Shop_xx');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    let results = await Category_xx.fetchAll();
    console.log('results', JSON.stringify(results));
    res.render('crown2_xx/index', {
      data: results,
      id: '123456789', 
      title: 'Crown2_DB' 
    });
  }catch(err){
    console.log(err);
  }


});


router.get('/shop_xx/:category', async function(req, res) {
   console.log('category', req.params.category);
   
   try{
     const cid = await Category_xx.fetchCatIdByName( req.params.category);
    //  console.log('cid', cid);
    //  const results = Shop_xx.fetchProductsByCategory(cid);
    let results = await Shop_xx.fetchProductsByCategory(cid);
    console.log('results', JSON.stringify(results));

    res.render('crown2_xx/products_xx', {
      data: results,
      title: req.params.category,
      name: 'Hisngtai Chung',
      id: '123456789'
    });

   }catch(err){
     console.log(err);
   }
} );

module.exports = router;