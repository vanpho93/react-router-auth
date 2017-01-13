import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Main from 'Main';
import DangNhap from 'DangNhap';
import GiaoDich from 'GiaoDich';
import TrangChu from 'TrangChu';
import {connect} from 'react-redux';
import {logIn, logOut} from 'action';
import store from 'store';

var requireLogin = (nextState, replace, next) => {
  console.log('Enter middleware');
  var {username} = store.getState();
  if(!username){
    replace('/');
  }
  next();
}

class App extends React.Component{
  render(){
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={TrangChu}/>
          <Route path="dangnhap" component={DangNhap}/>
          <Route path="giaodich" onEnter={requireLogin} component={GiaoDich}/>
        </Route>
      </Router>
    )
  }
  componentDidMount(){
    var {dispatch} = this.props;
    $.get('/checkSignIn', data => {
      console.log('CHECK: ', data.username);
      dispatch({type: 'LOG_IN', username: data.username});
    })
  }
}

module.exports = connect(function(state){
  return {username: state.username}
})(App);
