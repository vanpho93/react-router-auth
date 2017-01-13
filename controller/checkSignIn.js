let count = 0;
module.exports = (req, res) => {
  console.log(++count);
  if(req.session.isLogin == true){
      return res.send({username: 'vanpho93'});
  }
  res.send('false');
};
