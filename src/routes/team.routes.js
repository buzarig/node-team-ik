const express = require('express');
const teamController = require('../controllers/team.controller');

const router = express.Router();

router.get('/team', teamController.showTeam);

router.get('/member/:id', teamController.showMember);

module.exports = router;
