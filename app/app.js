var React = require('react');
var ReactDOM = require('react-dom');
var App = require('App');
var redux = require('redux');
var {Provider} = require('react-redux');

var reducer = (state = {username: null}, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {...state, username: action.username};
    default:
      return state;
  }
}

var store = redux.createStore(reducer);
store.subscribe(() => console.log('subscribe: ', store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
