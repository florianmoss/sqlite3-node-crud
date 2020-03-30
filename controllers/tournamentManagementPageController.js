const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database/players.db');

module.exports = (req, res, next) => {
    db.serialize(() => {
        db.all('SELECT * FROM results', (err, rows) => {
            let homeTeams = rows.map(e => e.home);
            let awayTeams = rows.map(e => e.away);
            // Get Unique Teams
            let allTeams = [...new Set([...homeTeams, ...awayTeams])];
            console.log(rows);
            console.log(allTeams);


            res.render('tournamentManagement', {
                data: rows,
                teams: ['LYIT', 'Cork', 'NUIG', 'Sligo']
            });
        });
    });
}