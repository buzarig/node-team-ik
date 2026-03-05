const express = require('express');
const path = require('path');
const homeController = require('../controllers/home.controller');

const router = express.Router();

router.get('/', homeController.renderHome);

router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'pages', 'about.html'));
});

module.exports = router;
