const router = require('express').Router();
const db = require('../../db/db.json');
const {v4: uuid} = require('uuid');
const fs = require('fs');
const path = require('path');

router.get('/notes', (req, res) => {
	res.json(db);
});

router.post('/notes', (req, res) => {
	let note = req.body;
	note.id = uuid();
	db.push(note);
	console.log(db);
	fs.writeFileSync(path.join(__dirname, '../../db/db.json'), JSON.stringify(db));
	res.json(db);
});

router.delete('/notes/:id', (req, res) => {
	res.json(db);
});

module.exports = router;
