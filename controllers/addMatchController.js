const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database/players.db');

module.exports = (req, res) => {
    console.log(req.body);

    db.run(
        'INSERT INTO results (home, away, homeResult, awayResult, homeImage, awayImage) VALUES ($home, $away, $homeResult, $awayResult, $homeImage, $awayImage)', {
            $home: req.body.home,
            $away: req.body.away,
            $homeResult: req.body.homeResult,
            $awayResult: req.body.awayResult,
            $homeImage: req.body.homeImage,
            $awayImage: req.body.awayImage
        },
        (err) => {
            if (err) {
                res.redirect('/tournamentManagement');
            } else {
                res.redirect('/tournamentManagement');
            }
        }
    );
}