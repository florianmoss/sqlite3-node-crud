const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database/players.db');

module.exports = (req, res, next) => {
    console.log(req.body.playing);
    console.log(req.body.notPlaying);

    let isPlaying = req.body.playing;
    let isNotPlaying = req.body.notPlaying;

    isPlaying.forEach(el => {
        db.run(
            'UPDATE players SET playing=1 WHERE id=$el', {
                $el: el,
            });
    });

    isNotPlaying.forEach(el => {
        db.run(
            'UPDATE players SET playing=0 WHERE id=$el', {
                $el: el,
            });
    });



}