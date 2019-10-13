const express = require('express');
const app = express();

app.use('/songs', require('./src/router/songs'));

app.listen(process.env.SERVICE_PORT, () => console.log(`listen on ${process.env.SERVICE_PORT} port`));