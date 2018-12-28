const app = require('./app/app');
const port = 3000;

app.route('/', (req, res, next) => {
  res.send('Home page');
});

const server = app.listen(port);

console.log('Application running in port 3000');

module.exports = server;
