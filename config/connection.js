const { connect, connection } = require('mongoose');

connect('mongodb://localhost/thoughtSpace', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;