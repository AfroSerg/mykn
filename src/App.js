import React, { Fragment } from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import HomePage from './components/pages/HomePage'

function App() {
  return (
    <Fragment>
      <Route path="/" component={HomePage} />
    </Fragment>
  );
}

export default App;
