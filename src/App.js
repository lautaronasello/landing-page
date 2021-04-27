import React from "react";
import Landing from "./landing";
import HomePage from "./homepage";
import ComoComprar from "./como-comprar";
import Comunity from "./comunity";
import Wholesalers from "./wholesalers";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/homepage" component={HomePage} />
        <Route exact path="/comocomprar" component={ComoComprar} />
        <Route exact path="/comunidad" component={Comunity} />
        <Route exact path="/mayoristas" component={Wholesalers} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
