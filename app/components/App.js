import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Main from 'Main';
import DangNhap from 'DangNhap';
import GiaoDich from 'GiaoDich';
import TrangChu from 'TrangChu';

var redirectIfLogedIn = (nextState, replace, next) => {
  console.log('Hello');
  next();
}

var requireLogin = (nextState, replace, next) => {
  console.log('requireLogin');
  next();
}

class App extends React.Component{
  render(){
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={TrangChu}/>
          <Route path="dangnhap" onEnter={redirectIfLogedIn} component={DangNhap}/>
          <Route path="giaodich" onEnter={requireLogin} component={GiaoDich}/>
        </Route>
      </Router>
    )
  }
}

module.exports = App;
