var session = require('express-session');
var sess = session({
  secret: 'j^gYTF^3278O((7))',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 3000000}
});
module.exports = sess;
