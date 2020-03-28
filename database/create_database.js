const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('players.db');

db.serialize(() => {
  db.run("CREATE TABLE players (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, appearances TEXT, height TEXT, position TEXT, playing INTEGER)");

  db.run("INSERT INTO players (name, appearances, height, position, playing) VALUES ('Lisa', '12', '180', 'Goal Shooter', '0')");
  db.run("INSERT INTO players (name, appearances, height, position, playing) VALUES ('Christine', '32', '192', 'Goal Keeper', '0')");
  db.run("INSERT INTO players (name, appearances, height, position, playing) VALUES ('Julia', '123', '185', 'Goal Defence', '0')");
  db.run("INSERT INTO players (name, appearances, height, position, playing) VALUES ('Martina', '43', '172', 'Goal Shooter', '0')");
  db.run("INSERT INTO players (name, appearances, height, position, playing) VALUES ('Maude', '32', '179', 'Goal Keeper', '0')");
  db.run("INSERT INTO players (name, appearances, height, position, playing) VALUES ('Fiona', '111', '182', 'Wing Defence', '0')");
  db.run("INSERT INTO players (name, appearances, height, position, playing) VALUES ('Anna', '87', '184', 'Goal Shooter', '0')");
  db.run("INSERT INTO players (name, appearances, height, position, playing) VALUES ('Maria', '45', '190', 'Goal Attack', '0')");
  db.run("INSERT INTO players (name, appearances, height, position, playing) VALUES ('Sally', '11', '185', 'Wing Attack', '1')");
  db.run("INSERT INTO players (name, appearances, height, position, playing) VALUES ('Katrina', '83', '181', 'Centre', '1')");

  console.log('successfully created the players table in players.db');

  db.each("SELECT id, name, appearances, height, position FROM players", (err, row) => {
    console.log(row.id + ":: " + row.name + ": " + row.appearances + ' - ' + row.height + ' - ' + row.position);
  });


  db.run("CREATE TABLE positions (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)");

  db.run("INSERT INTO positions (name) VALUES ('Goal Keeper')");
  db.run("INSERT INTO positions (name) VALUES ('Goal Defence')");
  db.run("INSERT INTO positions (name) VALUES ('Wing Defence')");
  db.run("INSERT INTO positions (name) VALUES ('Centre')");
  db.run("INSERT INTO positions (name) VALUES ('Wing Attack')");
  db.run("INSERT INTO positions (name) VALUES ('Goal Attack')");
  db.run("INSERT INTO positions (name) VALUES ('Goal Shooter')");


  console.log('successfully created the positions table in players.db');

  db.each("SELECT id, name FROM positions", (err, row) => {
    console.log(row.id + ": " + row.name);
  });

});

db.close();