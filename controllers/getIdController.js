const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database/players.db');

module.exports = (req, res) => {
    db.all('SELECT id FROM players', (err, rows) => {
        const allIds = rows.map(e => e.id);
        console.log(allIds);
        res.send(allIds);
    });
}