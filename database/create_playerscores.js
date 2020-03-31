  const sqlite3 = require('sqlite3');
  const db = new sqlite3.Database('players.db');

  db.serialize(() => {
      db.run("CREATE TABLE scores (id INTEGER, data TEXT)");

  })