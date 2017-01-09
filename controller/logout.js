module.exports = (req, res) => {
  req.session.isLogin = undefined;
  res.send('');
};
