import React from 'react';
import {Link, IndexLink} from 'react-router';
import {connect} from 'react-redux';

class Nav extends React.Component{
  render(){
    var {isLogin, username} = this.props;
    var xhtml = isLogin?
      <li><Link to="/dangnhap" activeClassName="active">{username}</Link></li>
      :<li><Link to="/dangnhap" activeClassName="active">Đăng nhập</Link></li>
    return (
      <ul id="menu">
        <li><IndexLink to="/" activeClassName="active">Homepage</IndexLink></li>
        <li><Link to="/giaodich" activeClassName="active">Giao dịch</Link></li>
        <li><Link to="/dangnhap" activeClassName="active">Tài khoản</Link></li>
      </ul>
    )
  }
}

module.exports = connect(function(state){
  return state
})(Nav);
