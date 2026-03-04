/**
 * Team Repository
 * Демонстрація: СИНХРОННИЙ ввід-вивід (fs.readFileSync)
 */
const fs = require('fs');
const path = require('path');

const TEAMS_PATH = path.join(__dirname, '..', 'data', 'teams.json');

/**
 * Зчитує всі команди синхронно
 * @returns {Array<{id: string, name: string, city: string, logo: string}>}
 */
function getAllSync() {
    const raw = fs.readFileSync(TEAMS_PATH, 'utf-8');
    return JSON.parse(raw);
}

/**
 * Знаходить команду за id (синхронно)
 * @param {string} id
 * @returns {{id: string, name: string, city: string, logo: string}|null}
 */
function getByIdSync(id) {
    const teams = getAllSync();
    return teams.find(t => t.id === id) || null;
}

module.exports = { getAllSync, getByIdSync };
