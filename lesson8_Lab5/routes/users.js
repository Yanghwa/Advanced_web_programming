var express = require('express');
var router = express.Router();
let Account = require('../models/account');

function isLoggedIn(req, res, next) {
   if(req.isAuthenticated()) {
      return next(); //user is logged, so call the next function
   } else {
      res.redirect('/'); //not logged in so redirect to home
   }
}

/* GET users listing. */
router.get('/', isLoggedIn, function(req, res, next) {
  Account.find(function(err, accounts) {
      if (err) {
         console.log(err);
         res.end(err);
         return;
      }

      // no error so send the books to the index view
      res.render('users', {
         accounts: accounts,
         title: 'Accounts List', 
         user: req.user
      });
   });
});

module.exports = router;
