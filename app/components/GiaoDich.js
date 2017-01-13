import React from 'react';
import {connect} from 'react-redux';

class GiaoDich extends React.Component{
  render(){
    return <h1>Bắt đầu giao dịch</h1>
  }
  componentDidMount(){
    console.log('Giao dich did mount');
  }
}

module.exports = connect(function(state){
  return {username: state.username}
})(GiaoDich);
