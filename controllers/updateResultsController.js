const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database/players.db');

module.exports = (req, res) => {
    db.serialize(() => {
        db.run(
            'UPDATE results SET awayResult=$awayValue, homeResult=$homeValue WHERE id=$num', {
                $num: req.body.num,
                $awayValue: req.body.awayValue,
                $homeValue: req.body.homeValue,
            }, () => {
                res.redirect('/tournamentManagement');
            });
    });
}