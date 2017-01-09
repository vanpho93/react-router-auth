import React from 'react';
import {Link, IndexLink} from 'react-router';

class Nav extends React.Component{
  signOut(e){
    e.preventDefault();
    $.get('/signout', data => console.log(data));
  }
  render(){
    return (
      <ul id="menu">
        <li><IndexLink to="/" activeClassName="active">Homepage</IndexLink></li>
        <li><Link to="/giaodich" activeClassName="active">Giao dịch</Link></li>
        <li><Link to="/dangnhap" activeClassName="active">Đăng nhập</Link></li>
        <li><a href="/" onClick={this.signOut.bind(this)}>Đăng xuất</a></li>
      </ul>
    )
  }
}

module.exports = Nav;
