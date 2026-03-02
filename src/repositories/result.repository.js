/**
 * Result Repository
 * Демонстрація: ASYNC / AWAIT (метод #4)
 */
const fs = require('fs');
const fsp = fs.promises;
const path = require('path');

const RESULTS_PATH = path.join(__dirname, '..', 'data', 'results.json');

/* ====== 4. ASYNC / AWAIT I/O ====== */

/**
 * Зчитує всі результати (async/await)
 * @returns {Promise<Array<{gameId: string, team1Score: number|null, team2Score: number|null}>>}
 */
async function getAllAsync() {
    const raw = await fsp.readFile(RESULTS_PATH, 'utf-8');
    return JSON.parse(raw);
}

/**
 * Знаходить результат за gameId (async/await)
 * @param {string} gameId
 * @returns {Promise<Object|null>}
 */
async function getByGameIdAsync(gameId) {
    const results = await getAllAsync();
    return results.find(r => r.gameId === gameId) || null;
}

/**
 * Зберігає або оновлює результат гри (async/await)
 * @param {string} gameId
 * @param {number} team1Score
 * @param {number} team2Score
 * @returns {Promise<Object>}
 */
async function saveAsync(gameId, team1Score, team2Score) {
    const results = await getAllAsync();
    const idx = results.findIndex(r => r.gameId === gameId);
    const entry = { gameId, team1Score: Number(team1Score), team2Score: Number(team2Score) };

    if (idx !== -1) {
        results[idx] = entry;
    } else {
        results.push(entry);
    }

    await fsp.writeFile(RESULTS_PATH, JSON.stringify(results, null, 2), 'utf-8');
    return entry;
}

module.exports = { getAllAsync, getByGameIdAsync, saveAsync };
