import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Main from 'Main';
import DangNhap from 'DangNhap';
import GiaoDich from 'GiaoDich';
import TrangChu from 'TrangChu';
import {connect} from 'react-redux';
import {logIn, logOut} from 'action';

class App extends React.Component{
  render(){
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={TrangChu}/>
          <Route path="dangnhap" component={DangNhap}/>
          <Route path="giaodich" component={GiaoDich}/>
        </Route>
      </Router>
    )
  }
  componentDidMount(){
    var {dispatch} = this.props;
    $.get('/checkSignIn', data => {
      console.log('CHECK: ', data);
      dispatch(logIn(data.username));
    })
  }
}

module.exports = connect()(App);
