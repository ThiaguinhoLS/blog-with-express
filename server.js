const app = require('./app/app');
const users = require('./app/routes/users');
const port = 3000;

app.route('/users')
  .get(users.get)
  .post(users.post);

app.route('/users/:id')
  .put(users.put)
  .delete(users.delete);

const server = app.listen(port);

console.log('Application running in port 3000');

module.exports = server;
