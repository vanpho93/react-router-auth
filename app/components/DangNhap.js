import React from 'react';

class DangNhap extends React.Component{
  handleSubmit(e){
    e.preventDefault();
    var {username, password} = this.refs;
    $.post('/login', {
      username: username.value,
      password: password.value
    }, response => {
      console.log(response);
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

module.exports = DangNhap;
