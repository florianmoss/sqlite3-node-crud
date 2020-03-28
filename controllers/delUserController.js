const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database/players.db');

module.exports = (req, res) => {
    console.log(req.body);

    db.run(
        'DELETE FROM players WHERE id=$id', {
            $id: req.body.num,
        }, () => {
            res.redirect('/management');
        }
    );
}