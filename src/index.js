import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import { addCity, removeCity } from './actions/cities'

const store = configureStore()
// console.log(store.getState())

// store.dispatch(addCity({name: 'Seattle'}))
// store.dispatch(addCity({name: 'San Francisco'}))
// store.dispatch(addCity({name: 'Chicago'}))
// console.log(store.getState())


// store.dispatch(removeCity({ 
//   id: store.getState().cities[1].id
// }))
// console.log(store.getState())


ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
