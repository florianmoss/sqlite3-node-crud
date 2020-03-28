const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database/players.db');

module.exports = (req, res) => {
    db.all('SELECT id, name, appearances, height, position FROM players', (err, rows) => {
        res.send(rows);
    });
}