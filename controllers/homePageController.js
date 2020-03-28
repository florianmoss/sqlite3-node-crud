const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database/players.db');

module.exports = (req, res, next) => {
    let data = [];
    let playing = [];

    db.serialize(() => {
        db.all('SELECT id, name, position, appearances, height FROM players', (err, rows) => {
            data = rows;
        });

        db.all('SELECT id, name FROM players WHERE playing=1', (err, rows) => {
            playing = rows;
        });

        db.all('SELECT id, name FROM players WHERE playing=0', (err, rows) => {
            res.render('index', {
                notPlaying: rows,
                data: data,
                playing: playing
            });
        });
    });
}