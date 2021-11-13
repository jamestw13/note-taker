const router = require('express').Router();
const db = require('../../db/db.json');

router.get('/notes', (req, res) => {
	res.json(db);
});

router.post('/notes', (req, res) => {
	console.log(req.body);
	db.push(req.body);
	res.json(db);
});

module.exports = router;
