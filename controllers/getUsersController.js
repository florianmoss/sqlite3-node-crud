const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database/players.db');

module.exports = (req, res) => {
    db.all('SELECT name FROM players', (err, rows) => {
        const allUsernames = rows.map(e => e.name);
        res.send(allUsernames);
    });
}