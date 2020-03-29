const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database/players.db');

module.exports = (req, res, next) => {
    db.serialize(() => {
        db.all('SELECT * FROM results', (err, rows) => {
            console.log(rows);

            res.render('tournamentManagement', {
                data: rows
            });
        });
    });
}