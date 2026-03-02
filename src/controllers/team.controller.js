const teamService = require('../services/team.service');

function showTeam(req, res) {
    const { brigadeName, members } = teamService.getTeamPage();
    res.render('layout', { 
        title: 'Команда - Roflo-team', 
        body: 'pages/team',
        brigadeName, 
        members 
    });
}

function showMember(req, res) {
    const member = teamService.getMemberPage(req.params.id);
    if (!member) {
        return res.status(404).send('Учасника не знайдено');
    }
    res.render('layout', { 
        title: member.name + ' - Roflo-team', 
        body: 'pages/member',
        member 
    });
}

module.exports = { showTeam, showMember };
