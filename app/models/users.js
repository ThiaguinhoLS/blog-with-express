const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    trim: true,
    minLength: 8,
    maxLength: 20
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 8,
    maxLength: 20
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: value => {
        return /^[^@]+@[^@]+\.[^@]+$/.test(value)
      }
    }
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', user);

