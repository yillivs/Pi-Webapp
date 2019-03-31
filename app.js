var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');

//bring in the data model
require('./app-api/models/db');
//bring in passport for easy login
require('./app-api/config/passport');

app.use(passport.initialize());
app.use('/app-api', routesApi);

