const express = require('express');
const port = 3000;
const app = express();

app.use('/songs', require('./src/router/songs'));

app.listen(port, () => console.log(`listen on ${port} port`));