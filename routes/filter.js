var express = require('express');
const axios = require('axios')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    const filtro = req.query ? req.query.f : ''
    axios.get("http://agenciabluefoot.vtexcommercestable.com.br/buscaautocomplete/?productNameContains="+filtro)
        .then((result)=>{
            console.log(result.data)
            res.json(result.data)
        }).catch(err => res.send(err));
});

module.exports = router;
