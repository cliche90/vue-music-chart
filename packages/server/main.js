const express = require('express');
const path = require('path');
const app = express();

app.set('vue engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', require('./src/router/index'));
app.use('/songs', require('./src/router/songs'));

app.listen(process.env.SERVICE_PORT, () => console.log(`listen on ${process.env.SERVICE_PORT} port`));