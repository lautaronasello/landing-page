import React from 'react';
import Landing from './landing';
import HomePage from './homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StarterPack from './pages/StarterPack.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/homepage' component={HomePage} />
        <Route exact path='/starter-pack' component={StarterPack} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
