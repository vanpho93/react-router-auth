module.exports = (username = null, action) => {
  if(action.type == 'LOG_IN'){
    return action.username;
  }
  return username;
};
