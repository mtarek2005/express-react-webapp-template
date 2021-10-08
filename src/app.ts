import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import usersRouter from './routes/users';

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/users', usersRouter);

app.use(express.static(path.join(__dirname, '../client/build')));
app.get('/*', function (_req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

module.exports = app;
