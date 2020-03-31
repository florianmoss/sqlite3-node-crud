  const sqlite3 = require('sqlite3');
  const db = new sqlite3.Database('players.db');

  db.serialize(() => {

      db.run("CREATE TABLE results (id INTEGER PRIMARY KEY AUTOINCREMENT, home TEXT, away TEXT, homeResult INTEGER, awayResult INTEGER, homeImage TEXT, awayImage TEXT)");

      db.run("INSERT INTO results (home, away, homeResult, awayResult, homeImage, awayImage) VALUES ('LYIT', 'Cork', '3', '2', '/img/lyit.png', '/img/cork.png')");
      db.run("INSERT INTO results (home, away, homeResult, awayResult, homeImage, awayImage) VALUES ('LYIT', 'NUIG', '2', '5', '/img/lyit.png', '/img/nuig.png')");
      db.run("INSERT INTO results (home, away, homeResult, awayResult, homeImage, awayImage) VALUES ('LYIT', 'Sligo', '5', '2', '/img/lyit.png', '/img/sligo.png')");

      db.run("INSERT INTO results (home, away, homeResult, awayResult, homeImage, awayImage) VALUES ('Cork', 'NUIG', '4', '1', '/img/cork.png', '/img/nuig.png')");
      db.run("INSERT INTO results (home, away, homeResult, awayResult, homeImage, awayImage) VALUES ('Sligo', 'Cork', '3', '2', '/img/sligo.png', '/img/cork.png')");

      db.run("INSERT INTO results (home, away, homeResult, awayResult, homeImage, awayImage) VALUES ('NUIG', 'Sligo', '0', '2', '/img/nuig.png', '/img/sligo.png')");


      console.log('successfully created the positions results in players.db');

      db.each("SELECT * FROM results", (err, row) => {
          console.log(row.id + ": " + row.home + "  " + row.away);
      });

      db.run("CREATE TABLE scores (id INTEGER, data TEXT)");

  })