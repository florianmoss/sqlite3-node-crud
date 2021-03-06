const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database/players.db');

module.exports = (req, res, next) => {
    let data = [];
    db.serialize(() => {
        db.all('SELECT id, name, appearances, height, position FROM players', (err, rows) => {
            data = rows;
        });

        db.all('SELECT name FROM positions', (err, rows) => {
            res.render('management', {
                data: data,
                positions: rows
            });
        });
    });


}