import React from 'react';

class DangNhap extends React.Component{
  handleSubmit(e){
    e.preventDefault();
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
}

module.exports = DangNhap;
