module.exports = (isLogin = false, action) => {
  if(action.type = 'LOG_OUT'){
    return false;
  } else if(action.type = 'LOG_IN'){
    return true;
  }
  return isLogin;
};
