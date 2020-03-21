const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');
const indexRouter = require('./routes/index');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/', indexRouter);

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});

module.exports = app;