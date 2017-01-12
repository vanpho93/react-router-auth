import React from 'react';
import {Link, IndexLink} from 'react-router';

class Nav extends React.Component{
  render(){
    return (
      <ul id="menu">
        <li><IndexLink to="/" activeClassName="active">Homepage</IndexLink></li>
        <li><Link to="/giaodich" activeClassName="active">Giao dịch</Link></li>
        <li><Link to="/dangnhap" activeClassName="active">Tài khoản</Link></li>
      </ul>
    )
  }
}

module.exports = Nav;
