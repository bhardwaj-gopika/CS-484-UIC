var express = require('express');
var router = express.Router();
router.use(express.urlencoded({extended:false}))
var axios = require('axios');


/* GET home page. */
router.get('/', function(req, res, next) {
    
    const state = {
      "country": "India",
      "state": "Delhi"
  }
    axios.post('https://countriesnow.space/api/v0.1/countries/state/cities', state).then(resp=>{
      var delhi = resp.data;
      console.log(delhi);
      var keys = delhi.data;
      console.log(keys);
      let states = [keys[2], keys[5], keys[7], keys[10], keys[14], keys[15]]
      console.log(states[0])
      
    });

    res.render('index');
    
});

module.exports = router;

