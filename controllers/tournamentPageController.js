const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database/players.db');

module.exports = (req, res, next) => {
    db.serialize(() => {
        let results = [];

        db.all('SELECT * FROM results', (err, rows) => {
            let homeTeams = rows.map(e => e.home);
            let awayTeams = rows.map(e => e.away);
            // Get Unique Teams
            let allTeams = [...new Set([...homeTeams, ...awayTeams])];
            let teamInfo = [];
            allTeams.forEach((el) => {
                teamInfo[el] = {
                    name: el,
                    image: '/img/'+el.toLowerCase()+'.png',
                    games: 0,
                    win: 0,
                    draw: 0,
                    loss: 0,
                    scored: 0,
                    against: 0,
                    difference: this.scored - this.against
                }
            });
            rows.forEach((el) => {
                if (el.homeResult > el.awayResult) {
                    teamInfo[el.home].win++;
                    teamInfo[el.away].loss++;
                } else if (el.homeResult == el.awayResult) {
                    teamInfo[el.home].draw++;
                    teamInfo[el.away].draw++;
                } else {
                    teamInfo[el.away].win++;
                    teamInfo[el.home].loss++;
                }
                teamInfo[el.away].games++;
                teamInfo[el.home].games++;

                teamInfo[el.away].scored += el.awayResult;
                teamInfo[el.home].scored += el.homeResult;

                teamInfo[el.away].against += el.homeResult;
                teamInfo[el.home].against += el.awayResult;
            })

            let out = [];
            allTeams.forEach((el) => {
                teamInfo[el].difference = teamInfo[el].scored - teamInfo[el].against;
                teamInfo[el].points = teamInfo[el].win * 3 + teamInfo[el].draw;
                out.push(teamInfo[el]);
            });

            function compare(a, b) {
                if (a.points > b.points) {
                    return -1;
                }
                if (a.points < b.points) {
                    return 1;
                }
                if (a.difference < b.points) {
                    return -1;
                }
                if (a.difference > b.points) {
                    return 1;
                }
                return 0;
            }

            out.sort(compare)

            console.log(out);

            results = out;

        });

        db.all('SELECT * FROM results', (err, rows) => {
            console.log(rows);

            res.render('tournament', {
                data: rows,
                result: results
            });
        });
    });
}