var redux = require('redux');
var reducer = require('reducer');
var store = redux.createStore(reducer);
store.subscribe(() => console.log('subscribe: ',store.getState()));

store.dispatch({type: 'LOG_IN', username: 'vanpho93'});

module.exports = store;
