// DEPENDENCIES
const path = require('path');
const router = require('express').Router();

// ROUTES

// Notes page
router.get('/notes', (req, res) => {
	res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// Homepage
router.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;
