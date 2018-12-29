const users = [
    { _id: 1, username: 'jonsnow', password: 'stark' },
    { _id: 2, username: 'daenerys', password: 'targaryen' }
];

exports.get = (request, response, next) => {
  response.status(200).json({ users });
};

exports.post = (request, response, next) => {
  const user = {};
  user._id = users[users.length - 1]._id + 1
  user.username = request.params.username;
  user.password = request.params.password;
  users.push(user);
  response.status(201).json({
    message: 'User added successfully',
    user: user
  });
};

exports.put = (request, response, next) => {
  users.forEach(user => {
    if (user._id == request.params.id) {
      Object.assign(user, request.body);
    }
  });
  response.status(200).json({
    message: 'User updated successfully'
  });
};

exports.delete = (request, response, next) => {
  users.forEach((user, index) => {
    if (user._id == request.params.id) {
      users.splice(index, 1);
    }
  });
  response.status(200).json({
    message: 'User deleted successfully'
  });
};

