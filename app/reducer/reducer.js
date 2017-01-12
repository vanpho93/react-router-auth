var redux = require('redux');
var isLogin = require('./isLogin.js');
var username = require('./username.js');
module.exports = redux.combineReducers({isLogin, username});
