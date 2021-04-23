import React from "react";
import Landing from "./landing";
import HomePage from "./homepage";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/homepage" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
