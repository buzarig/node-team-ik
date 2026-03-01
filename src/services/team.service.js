const teamRepository = require('../repositories/team.repository');

function getTeamPage() {
    const members = teamRepository.getAllMembers();
    const brigadeName = teamRepository.getBrigadeName();
    return { brigadeName, members };
}

function getMemberPage(id) {
    const member = teamRepository.getMemberById(id);
    return member;
}

module.exports = { getTeamPage, getMemberPage };
