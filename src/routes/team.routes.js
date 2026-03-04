const express = require('express');
const teamController = require('../controllers/team.controller');

const router = express.Router();

// Страница команды — динамическая, данные из JSON
router.get('/team', teamController.showTeam);

// Динамическая страница участника
router.get('/member/:id', teamController.showMember);

module.exports = router;
