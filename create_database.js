const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database/players.db');

db.serialize(() => {
  db.run("CREATE TABLE players (name TEXT, appearances TEXT, height TEXT, position TEXT)");

  db.run("INSERT INTO players VALUES ('Mark', '12', '180', 'Forward')");
  db.run("INSERT INTO players VALUES ('John', '32', '192', 'Goalkeeper')");
  db.run("INSERT INTO players VALUES ('Chris', '123', '185', 'Defense')");

  console.log('successfully created the players table in players.db');

  db.each("SELECT name, appearances, height, position FROM players", (err, row) => {
    console.log(row.name + ": " + row.appearances + ' - ' + row.height + ' - ' + row.position);
  });
});

db.close();