const server = require('../server');
const chai = require('chai')
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Home page test render', () => {
  it('Testing status code', done => {
    chai.request(server)
    .get('/')
    .end((err, res) => {
      done();
    });
  });
});

