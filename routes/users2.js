var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send([
    { id: 1, name: 'satake' },
    { id: 2, name: 'Yusuke' },
    { id: 3, name: 'sat' },
    { id: 3, name: 'sat' },
    { id: 3, name: 'sat' },
    { id: 3, name: 'sat' },
    { id: 3, name: 'sat' },
  ]);
});

module.exports = router;
