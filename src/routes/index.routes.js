const express = require('express');
const path = require('path');
const homeController = require('../controllers/home.controller');

const router = express.Router();

// Главная (рендер EJS через контроллер)
router.get('/', homeController.renderHome);

// Статическая HTML страница (.html) — требование 2 лабы
router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'pages', 'about.html'));
});

module.exports = router;
