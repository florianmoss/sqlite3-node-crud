const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database/players.db');

db.serialize(() => {
  db.run("CREATE TABLE players (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, appearances TEXT, height TEXT, position TEXT)");

  db.run("INSERT INTO players (name, appearances, height, position) VALUES ('Mark', '12', '180', 'Forward')");
  db.run("INSERT INTO players (name, appearances, height, position) VALUES ('John', '32', '192', 'Goalkeeper')");
  db.run("INSERT INTO players (name, appearances, height, position) VALUES ('Chris', '123', '185', 'Defense')");

  console.log('successfully created the players table in players.db');

  db.each("SELECT id, name, appearances, height, position FROM players", (err, row) => {
    console.log(row.id + ":: " + row.name + ": " + row.appearances + ' - ' + row.height + ' - ' + row.position);
  });
});

db.close();