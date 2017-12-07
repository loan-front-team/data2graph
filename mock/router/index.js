var express = require('express')
var sourceUrlJson = require('../data/sourceUrl');
// var barDataJson = require('../chartsData/chartsResourceUrl');


var router = express.Router();


router.get('/api/query', function(req, res) {
	res.json(sourceUrlJson);
});

// router.get('/api/dataUrl', function(req, res) {
// 	res.json(barDataJson.barData);
// });
// router.get('/api/dataUrl1', function(req, res) {
// 	res.json(barDataJson.barData1);
// });
module.exports = router;
