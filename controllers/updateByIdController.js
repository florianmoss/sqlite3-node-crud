const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database/players.db');

module.exports = (req, res) => {
    console.log(req.body.num + ' ' + req.body.name + ' ' + req.body.position + ' ' + req.body.appearances + ' ' + req.body.height);
    db.serialize(() => {
        db.run(
            'UPDATE players SET position=$position WHERE id=$id', {
                $id: req.body.num,
                $position: req.body.position
            });

        db.run(
            'UPDATE players SET appearances=$appearances WHERE id=$id', {
                $id: req.body.num,
                $appearances: req.body.appearances
            });

        db.run(
            'UPDATE players SET name=$name WHERE id=$id', {
                $id: req.body.num,
                $name: req.body.name
            });

        db.run(
            'UPDATE players SET height=$height WHERE id=$id', {
                $id: req.body.num,
                $height: req.body.height
            }, () => {
                res.redirect('/management');
            });
    });
}