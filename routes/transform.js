var axios = require('axios');
var express = require('express');

var router = express.Router();

/* GET home page. */
router.post('/valley', function(req, res, next) {
  axios
    .post('https://api.funtranslations.com/translate/valspeak.json', req.params)
    .then(res.json)
    .catch(console.error);
});

module.exports = router;
