import React from 'react';
import Landing from './landing';
import HomePage from './homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import StarterPack from './StarterPack';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/homepage' component={HomePage} />
          <Route exact path='/starter-pack' component={StarterPack} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
