const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database/players.db');

module.exports = (req, res) => {
    console.log(req.body);
    console.log(req.body.data.toString());

    db.run(
        'DELETE FROM scores WHERE id=$id', {
            $id: req.body.num
        });

    db.run(
        'INSERT INTO scores (id, data ) VALUES ($id, $data)', {
            $data: req.body.data.toString(),
            $id: req.body.num
        },
        (err) => {
            if (err) {
                res.send({
                    message: 'error in app.post(/addplayerscores)'
                });
            } else {
                res.send({
                    message: 'successfully run app.post(/addplayerscores)'
                });
            }
        }
    );
}