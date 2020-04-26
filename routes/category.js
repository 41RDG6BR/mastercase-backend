var express = require('express');
const axios = require('axios')
var router = express.Router();

router.get('/', function(req, res, next) {
  axios.get("http://agenciabluefoot.vtexcommercestable.com.br/api/catalog_system/pub/products/search/?map=ft").then((result)=>{
    console.log(result.data)
    res.json(result.data)
  }).catch(err => res.send(err));
});

module.exports = router;
