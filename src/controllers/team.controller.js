const teamService = require('../services/team.service');

function showTeam(req, res) {
    const { brigadeName, members } = teamService.getTeamPage();
    res.render('pages/team', { title: 'Команда', brigadeName, members });
}

function showMember(req, res) {
    const member = teamService.getMemberPage(req.params.id);
    if (!member) {
        return res.status(404).send('Учасника не знайдено');
    }
    res.render('pages/member', { title: member.name, member });
}

module.exports = { showTeam, showMember };
