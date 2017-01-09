import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Main from 'Main';
import DangNhap from 'DangNhap';
import GiaoDich from 'GiaoDich';
import TrangChu from 'TrangChu';

var redirectIfLogedIn = (nextState, replace, next) => {
  $.get('/checkSignIn', data => {
    if(data == 'true'){
      replace('/');
      hashHistory.push('/');
    }
    next();
  });
}

var requireLogin = (nextState, replace, next) => {
  $.get('/checkSignIn', data => {
    console.log('GIAO DICH: ',data);
    if(data != 'true'){
      replace('/dangnhap');
      hashHistory.push('/dangnhap');
    }
    next();
  });
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
