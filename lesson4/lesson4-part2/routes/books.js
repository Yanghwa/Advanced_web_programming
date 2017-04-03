/**
 * Created by RFreeman on 2/1/2017.
 */
// express setup
let express = require('express');
let router = express.Router();

/* GET books main page */
router.get('/', function(req, res, next) {
   res.render('books/index');
});

// make this file public
module.exports = router;
