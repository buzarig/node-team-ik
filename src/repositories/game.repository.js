/**
 * Game Repository
 * Демонстрація:
 *   - CALLBACK (fs.readFile зі зворотним викликом) — метод #2
 *   - PROMISE  (fs.promises.readFile().then()) — метод #3
 */
const fs = require('fs');
const path = require('path');

const GAMES_PATH = path.join(__dirname, '..', 'data', 'games.json');

/* ---------- private helpers ---------- */
function readGamesSync() {
    return JSON.parse(fs.readFileSync(GAMES_PATH, 'utf-8'));
}

function writeGamesSync(games) {
    fs.writeFileSync(GAMES_PATH, JSON.stringify(games, null, 2), 'utf-8');
}

/* ====== 2. CALLBACK-based I/O ====== */

/**
 * Зчитує всі ігри через callback
 * @param {function(Error|null, Array|null)} cb
 */
function getAllCallback(cb) {
    fs.readFile(GAMES_PATH, 'utf-8', (err, data) => {
        if (err) return cb(err, null);
        try {
            cb(null, JSON.parse(data));
        } catch (parseErr) {
            cb(parseErr, null);
        }
    });
}

/* ====== 3. PROMISE-based I/O ====== */

/**
 * Зчитує всі ігри через Promise
 * @returns {Promise<Array>}
 */
function getAllPromise() {
    return fs.promises.readFile(GAMES_PATH, 'utf-8')
        .then(data => JSON.parse(data));
}

/**
 * Знаходить гру за id (Promise)
 * @param {string} id
 * @returns {Promise<Object|null>}
 */
function getByIdPromise(id) {
    return getAllPromise().then(games => games.find(g => g.id === id) || null);
}

/* ====== Synchronous write helpers (for admin CRUD) ====== */

function createSync(game) {
    const games = readGamesSync();
    games.push(game);
    writeGamesSync(games);
    return game;
}

function updateSync(id, data) {
    const games = readGamesSync();
    const idx = games.findIndex(g => g.id === id);
    if (idx === -1) return null;
    games[idx] = { ...games[idx], ...data };
    writeGamesSync(games);
    return games[idx];
}

function deleteSync(id) {
    const games = readGamesSync();
    const idx = games.findIndex(g => g.id === id);
    if (idx === -1) return false;
    games.splice(idx, 1);
    writeGamesSync(games);
    return true;
}

module.exports = {
    getAllCallback,
    getAllPromise,
    getByIdPromise,
    createSync,
    updateSync,
    deleteSync
};
