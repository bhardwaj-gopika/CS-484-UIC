var express = require('express');
var router = express.Router();
var fs = require('fs');
var db = require('../db');
var passport = require('passport');
router.use(express.urlencoded({extended:false}))

router.post('/', function(req, res, next){

    console.log(req.body.username);
    console.log(req.user);
    let userNAmeInfo2 = req.user.displayName;
    db.get('update user set username = ? where id = ?', [req.body.username, req.user.id], function(err, rowid){
        if (err) {return cb(err);}
        //res.send(popup('User is updated'));
    });

    res.render('dashboard', {userNAmeInfo2});
  
})





module.exports = router;