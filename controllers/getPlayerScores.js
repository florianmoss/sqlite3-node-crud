const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database/players.db');

module.exports = (req, res) => {
    db.serialize(() => {
        db.all(
            'SELECT * FROM scores',
            (err, rows) => {
                if (rows.length > 0) {
                    console.log(rows);

                    res.send(rows);
                } else {
                    res.send({});
                }
            }
        );
    });
}