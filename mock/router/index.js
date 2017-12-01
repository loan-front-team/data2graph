var express = require('express')
var sourceUrlJson = require('../data/sourceUrl')
var router = express.Router();

router.get('/api/query', function(req, res) {
	res.json(sourceUrlJson);
});

module.exports = router