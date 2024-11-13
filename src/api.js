const express = require('express');
const serverless = require('serverless-http');
const indexRouter = require('../app_server/routers/indexRouter');

const app = express();

app.use('/',indexRouter);

module.exports.handler = serverless(app);