import React, { Fragment } from 'react';
import { Route } from 'react-router-dom'

import HomePage from './pages/HomePage'

function App() {
  return (
    <Fragment>
      <Route path="/" component={HomePage} />
    </Fragment>
  );
}

export default App;
