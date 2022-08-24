require('dotenv').config()
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const bearerToken = require('express-bearer-token')

var app = express();

var env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';

app.use(bearerToken());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// pass the authorization checker middleware
const authCheckMiddleware = require('./middleware/auth-check');
app.use('/api', authCheckMiddleware);

// routes
const premiumCalculator = require('./routes/calculate');
const userRoutes = require('./routes/user');

app.use('/api/v1/calculate', premiumCalculator);
app.use('/api/v1/user', userRoutes);

app.get('/', (req,res) => {
    res.json({ message: "Hello world API" });
})

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    if(err?.name === 'ValidationError') {
        res.status(400);
        res.json({success: false, error: err.errors || "Validation error"})
    } else {
        res.status(err.status || 500);
        res.json({success: false, error: "System error"})
    }
});


module.exports = app;