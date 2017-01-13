module.exports = (req, res) => {
  var {username, password} = req.body;
  if(username == 'vanpho93' && password == '123'){
    req.session.isLogin = true;
    return res.send({username});
  }
  res.send('DANG_NHAP_THAT_BAI');
};
