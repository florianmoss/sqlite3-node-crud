const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database/pets.db');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Hi Gerard, please use the routes in /routes to get the data.'
  });
});

router.get('/users', (req, res) => {
  db.all('SELECT name FROM users_to_pets', (err, rows) => {
    console.log(rows);
    const allUsernames = rows.map(e => e.name);
    console.log(allUsernames);
    res.send(allUsernames);
  });
});


router.post('/users', (req, res) => {
  console.log(req.body);

  db.run(
    'INSERT INTO users_to_pets VALUES ($name, $job, $pet)', {
      $name: req.body.name,
      $job: req.body.job,
      $pet: req.body.pet,
    },
    (err) => {
      if (err) {
        res.send({
          message: 'error in app.post(/users)'
        });
      } else {
        res.send({
          message: 'successfully run app.post(/users)'
        });
      }
    }
  );
});

router.get('/users/:userid', (req, res) => {
  const nameToLookup = req.params.userid;

  db.all(
    'SELECT * FROM users_to_pets WHERE name=$name', {
      $name: nameToLookup
    },
    (err, rows) => {
      console.log(rows);
      if (rows.length > 0) {
        res.send(rows[0]);
      } else {
        res.send({});
      }
    }
  );
});

router.post('/deluser', (req, res) => {
  console.log(req.body);

  db.run(
    'DELETE FROM users_to_pets WHERE name=$name', {
      $name: req.body.name,
    },
    (err) => {
      if (err) {
        res.send({
          message: 'error in app.post(/deluser)'
        });
      } else {
        res.send({
          message: 'successfully run app.post(/deluser)'
        });
      }
    }
  );
});

module.exports = router;