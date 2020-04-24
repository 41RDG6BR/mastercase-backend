var express = require('express');
const axios = require('axios')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  axios.get("http://agenciabluefoot.vtexcommercestable.com.br/buscaautocomplete/?productNameContains=").then((result)=>{
    console.log(result.data)
    res.json(result.data)
  })
  //   try{
  //     axios.get("https://api.neoscan.io/api/main_net/v1/get_all_nodes")
  //           .then(data => res.status(200).json(data))
            
  //           .catch(err => res.send(err));
  // }
  // catch(err){
  //     console.error("GG", err);
  // }
});

module.exports = router;
