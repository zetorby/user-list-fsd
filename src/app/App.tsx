import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Router } from '../pages';
import store from '../shared/store/store';

import './styles/main.scss';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
