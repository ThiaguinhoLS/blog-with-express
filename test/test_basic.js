const server = require('../server');
const chai = require('chai')
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Users endpoint', () => {

  it('Route: /users Method: GET Description: Return all users', done => {
    chai.request(server)
    .get('/users')
    .end((err, response) => {
      expect(response).to.have.status(200);
      done();
    });
  });

  it('Route: /users Method: POST Description: Added a user', done => {
    const user = {
      username: 'tyrion',
      password: 'lannister'
    };
    chai.request(server)
    .post('/users')
    .send(user)
    .end((err, response) => {
      expect(response).to.have.status(201);
      done();
    });
  });

});

