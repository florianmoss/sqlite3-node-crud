const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database/players.db');

module.exports = (req, res) => {
    console.log(req.body);

    db.run(
        'DELETE FROM players WHERE name=$name', {
            $name: req.body.name,
        },
        (err) => {
            if (err) {
                res.send({
                    message: 'error in app.post(/deluser)'
                });
            } else {
                res.send({
                    message: 'successfully run app.post(/deluser)'
                });
            }
        }
    );
}