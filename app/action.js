function logIn(username){
  return {type: 'LOG_IN_USERNAME', username}
}

function logOut() {
  return {type: 'LOG_OUT'}
}

module.exports = {logIn, logOut}
