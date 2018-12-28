const app = require('./app/app');
const port = 3000;

app.get('/', (req, res, next) => {
  res.send('Home page');
});

const server = app.listen(port);

console.log('Application running in port 3000');

module.exports = server;
