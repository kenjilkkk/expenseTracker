var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index'); //route handling code
var usersRouter = require('./routes/users'); //route handling code
var despesasRouter = require('./api/routes/despesasRoutes') //route handling code
var editRouter = require('./api/routes/editarRoutes');
var updateRouter = require('./api/routes/updateRoutes');
var deleteRouter = require('./api/routes/deleteRoutes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Routes setup
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/despesas', despesasRouter)
app.use('/editar', editRouter);
app.use('/editar-despesa', updateRouter);
app.use('/deletar', deleteRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
