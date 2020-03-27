const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database/players.db');

module.exports = (req, res) => {

    try {
        const nameToLookup = req.params.userid;

        db.all(
            'SELECT * players WHERE name=$name', {
                $name: nameToLookup,
            },
            (err, rows) => {
                if (rows.length > 0) {
                    res.send(rows[0]);
                } else {
                    res.send({});
                }
            }
        );
    } catch (error) {
        console.log(error);
    }
}