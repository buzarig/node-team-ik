const express = require('express');
const path = require('path');

const router = express.Router();

// Главная (рендер EJS, шаблон сделают другие)
router.get('/', (req, res) => {
    res.render('pages/home', { title: 'Home' });
});

// Статическая HTML страница (.html) — требование 2 лабы
router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'pages', 'about.html'));
});

module.exports = router;
