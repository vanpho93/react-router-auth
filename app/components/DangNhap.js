import React from 'react';
import {connect} from 'react-redux';

class DangNhap extends React.Component{
  handleSubmit(e){
    e.preventDefault();
    var {dispatch} = this.props;
    var {username, password} = this.refs;
    $.post('/login', {
      username: username.value,
      password: password.value
    }, response => {
      if(response.username){
        dispatch({type: 'LOG_IN', username: response.username});
      }
    })
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Username" ref="username"/>
        <br/><br/>
        <input type="password" placeholder="Password" ref="password"/>
        <br/><br/>
        <button type="submit">Đăng nhập</button>
      </form>
    )
  }
  componentDidMount(){
    console.log('Dang nhap did mount');
  }
}

module.exports = connect()(DangNhap);
