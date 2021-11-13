// DEPENDENCIES
const router = require('express').Router();
let db = require('../../db/db.json');
const {v4: uuid} = require('uuid');
const fs = require('fs');
const path = require('path');

// ROUTES

// Get notes to display
router.get('/notes', (req, res) => {
	if (!db.length) {
		res.status(404).send('No notes found');
	} else {
		res.json(db);
	}
});

// Post a new note: add UUID and push to db.json
router.post('/notes', (req, res) => {
	let note = req.body;
	note.id = uuid();
	db.push(note);
	fs.writeFileSync(path.join(__dirname, '../../db/db.json'), JSON.stringify(db));
	res.json(db);
});

// Delete a note
router.delete('/notes/:id', (req, res) => {
	db = db.filter(note => note.id !== req.params.id);

	fs.writeFileSync(path.join(__dirname, '../../db/db.json'), JSON.stringify(db));
	res.json(db);
});

module.exports = router;
