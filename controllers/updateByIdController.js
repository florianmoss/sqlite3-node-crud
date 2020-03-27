const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database/players.db');

module.exports = (req, res) => {
    db.run(
        'UPDATE players SET name=$name, appearances=$appearances, height=$height, position=$position WHERE id=$id', {
            $id: req.body.id,
            $name: req.body.name,
            $appearances: req.body.appearances,
            $height: req.body.height,
            $position: req.body.position
        },
        (err) => {
            if (err) {
                res.send({
                    message: 'error in app.post(/updateById)'
                });
            } else {
                res.send({
                    message: 'successfully run app.post(/updateById)'
                });
            }
        }
    )
}