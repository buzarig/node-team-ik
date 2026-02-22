const express = require('express');

const router = express.Router();

// Страница команды (рендер EJS, шаблон сделают другие)
router.get('/team', (req, res) => {
    res.render('pages/team');
});

// Динамическая страница участника (рендер EJS, шаблон сделают другие)
router.get('/member/:id', (req, res) => {
    const { id } = req.params;
    res.render('pages/member', { id });
});

module.exports = router;
