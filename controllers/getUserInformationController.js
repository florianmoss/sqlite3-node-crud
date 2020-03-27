const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database/players.db');

module.exports = (req, res) => {
    db.serialize(() => {
        db.all(
            'SELECT * FROM players WHERE name=$name', {
                $name: req.params.userid,
            },
            (err, rows) => {
                console.log(err);
                
                if (rows.length > 0) {
                    res.send(rows[0]);
                } else {
                    res.send({});
                }
            }
        );
    });
}