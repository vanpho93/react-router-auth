module.exports = (username = null, action) => {
  if(action.type == 'LOG_IN'){
    return action.username;
  } else if (action.type = 'LOG_OUT') {
    return action.username = null;
  }
  return username;
};
