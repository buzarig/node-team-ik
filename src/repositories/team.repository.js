const path = require('path');
const fs = require('fs');

const DATA_PATH = path.join(__dirname, '..', 'data', 'team.json');

function readData() {
    const raw = fs.readFileSync(DATA_PATH, 'utf-8');
    return JSON.parse(raw);
}

function getAllMembers() {
    const data = readData();
    return data.members;
}

function getBrigadeName() {
    const data = readData();
    return data.brigadeName;
}

function getMemberById(id) {
    const members = getAllMembers();
    return members.find((m) => m.id === id) || null;
}

module.exports = { getAllMembers, getBrigadeName, getMemberById };
