const app = require('./app/app');
const users = require('./app/routes/users');
const port = 3000;

app.route('/users')
  .get(users.get)
  .post(users.post)

const server = app.listen(port);

console.log('Application running in port 3000');

module.exports = server;
