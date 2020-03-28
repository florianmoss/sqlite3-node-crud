const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('roster.db');

db.serialize(() => {
    db.run("CREATE TABLE roster (id INTEGER PRIMARY KEY AUTOINCREMENT, player_id INTEGER, playing INTEGER)");

    db.run("INSERT INTO roster (player_id, playing) VALUES ('1', '1')");
    db.run("INSERT INTO roster (player_id, playing) VALUES ('2', '1')");
    db.run("INSERT INTO roster (player_id, playing) VALUES ('3', '1')");
    db.run("INSERT INTO roster (player_id, playing) VALUES ('4', '1')");
    db.run("INSERT INTO roster (player_id, playing) VALUES ('5', '1')");
    db.run("INSERT INTO roster (player_id, playing) VALUES ('6', '0')");
    db.run("INSERT INTO roster (player_id, playing) VALUES ('7', '0')");
    db.run("INSERT INTO roster (player_id, playing) VALUES ('8', '0')");
    db.run("INSERT INTO roster (player_id, playing) VALUES ('9', '0')");
    db.run("INSERT INTO roster (player_id, playing) VALUES ('10', '0')");

    console.log('successfully created the rosters table in roster.db');

    db.each("SELECT id, player_id, playing FROM roster", (err, row) => {
        console.log(row.id + ":: " + row.player_id + ": " + row.playing);
    });
});

db.close();