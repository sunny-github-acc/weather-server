const express = require('express');

const router = require('./src/routes');

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, async (error) => console.log(error ? error : ':)'));

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	next();
});
app.use('/', router);

module.exports = app;
