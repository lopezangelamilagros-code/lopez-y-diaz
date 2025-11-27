// Dependencias
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
require('dotenv').config();
var session = require('express-session');
var fileUpload = require('express-fileupload');

// Rutas
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/admin/login');
var adminEspecialidadesRouter = require('./routes/admin/especialidades');
var apiRouter = require('./routes/api');

var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Configuración de session segura
app.use(session({
  secret: process.env.SESSION_SECRET || '123456',
  cookie: { maxAge: null },
  resave: false,
  saveUninitialized: true
}));

// Middleware para proteger rutas admin
const secured = async (req, res, next) => {
  try {
    if (req.session.id_usuario) {
      next();
    } else {
      res.redirect('/admin/login');
    }
  } catch (error) {
    console.log(error);
    res.redirect('/admin/login');
  }
};

// File upload
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));

// Rutas de la app
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/especialidades', secured, adminEspecialidadesRouter);
app.use('/api', cors(), apiRouter);

// Catch 404 y forward a error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));

module.exports = app;
