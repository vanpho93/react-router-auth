module.exports = (req, res) => {
  if(req.session.isLogin == true){
      return res.send('true');
  }
  res.send('false');
};
