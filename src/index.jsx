import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// import App from './components/App';
import SearchPage from './components/SearchPage';
import reducer from './reducers/';

ReactDOM.render(
  <Provider store={createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )}>
    <SearchPage
      history={history}
      location={location}
    />
  </Provider>,
  document.querySelector('.container'),
);
