const teamService = require('../services/team.service');

function renderHome(req, res) {
    res.render('layout', { 
        title: 'Головна - Roflo-team', 
        body: 'pages/home' 
    });
}

module.exports = { renderHome };
