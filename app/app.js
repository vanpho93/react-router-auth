var React = require('react');
var ReactDOM = require('react-dom');
var App = require('App');
var store = require('store');
var {Provider} = require('react-redux');

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
