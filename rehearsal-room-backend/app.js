var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// db represents our entry point into our database.
const db = require('./db')
// dbHelpers consumes our db entry point to create the helper functions.
// Each router consumes dbHelpers and extracts the functions it needs.
const dbHelpers = require('./helpers/dbHelpers')(db);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var spacesRouter = require('./routes/spaces');
var bookingsRouter = require('./routes/bookings');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter(dbHelpers));
app.use('/api/spaces', spacesRouter(dbHelpers));
app.use('/api/bookings', bookingsRouter(dbHelpers));

module.exports = app;
