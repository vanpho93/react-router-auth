import React from 'react';

class GiaoDich extends React.Component{
  render(){
    return <h1>Bắt đầu giao dịch</h1>
  }
  componentDidMount(){
    console.log('Giao dich did mount');
  }
}

module.exports = GiaoDich;
