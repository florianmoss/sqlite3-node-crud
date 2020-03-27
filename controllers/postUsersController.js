const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database/players.db');

module.exports = (req, res) => {
    console.log(req.body);

    db.run(
        'INSERT INTO players VALUES ($name, $appearances, $height, $position)', {
            $name: req.body.name,
            $appearances: req.body.appearances,
            $height: req.body.height,
            $position: req.body.position
        },
        (err) => {
            if (err) {
                res.send({
                    message: 'error in app.post(/users)'
                });
            } else {
                res.send({
                    message: 'successfully run app.post(/users)'
                });
            }
        }
    );
}