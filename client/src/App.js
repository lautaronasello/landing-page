import React from 'react';
import Landing from './landing';
import HomePage from './homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Checkout from './pages/Checkout';
import Admin from './pages/Admin';

import successPayment from './pages/successPayment';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/homepage' component={HomePage} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/success' component={successPayment} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
