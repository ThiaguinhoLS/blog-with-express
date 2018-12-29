describe('Users endpoint', () => {

  it('Route: /users Method: GET Description: Return all users', done => {
    chai.request(server)
    .get('/users')
    .end((error, response) => {
      expect(response).to.have.status(200);
      expect(response.body).to.have.property('users');
      expect(response.body.users).to.be.a('array');
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
    .end((error, response) => {
      expect(response).to.have.status(201);
      expect(response.body).to.have.property('message');
      done();
    });
  });

  it('Route: /users/:id Method: PUT Description: Changed a user', done => {
    chai.request(server)
    .put('/users/1')
    .send({
      username: 'Sansa'
    })
    .end((error, response) => {
      expect(response).to.have.status(200);
      expect(response.body).to.have.property('message');
      done();
    });
  });

  it('Route: /users/:id Method: DELETE Description: Deleted a user', done => {
    chai.request(server)
    .delete('/users/1')
    .end((error, response) => {
      expect(response).to.have.status(200);
      expect(response.body).to.have.property('message');
      done();
    });
  });

});

