const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database/pets.db');

db.serialize(() => {
  db.run("CREATE TABLE users_to_pets (name TEXT, job TEXT, pet TEXT)");

  db.run("INSERT INTO users_to_pets VALUES ('Mark', 'lecturer', 'cat.jpg')");
  db.run("INSERT INTO users_to_pets VALUES ('John', 'student', 'dog.jpg')");
  db.run("INSERT INTO users_to_pets VALUES ('Chris', 'engineer', 'bear.jpg')");

  console.log('successfully created the users_to_pets table in pets.db');

  db.each("SELECT name, job, pet FROM users_to_pets", (err, row) => {
    console.log(row.name + ": " + row.job + ' - ' + row.pet);
  });
});

db.close();