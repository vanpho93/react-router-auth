import React from 'react';
import {Link, IndexLink} from 'react-router';
import {connect} from 'react-redux';

class Nav extends React.Component{
  render(){
    var {username} = this.props;
    var xhtml = username != null?
      <li><Link to="/dangnhap" activeClassName="active">{username}</Link></li>
      :<li><Link to="/dangnhap" activeClassName="active">Đăng nhập</Link></li>
    return (
      <ul id="menu">
        <li><IndexLink to="/" activeClassName="active">Homepage</IndexLink></li>
        <li><Link to="/giaodich" activeClassName="active">Giao dịch</Link></li>
        {xhtml}
      </ul>
    )
  }
}

module.exports = connect(function(state){
  return {username: state.username}
})(Nav);
