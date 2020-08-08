import React from 'react';
import './static/App.css';
import Home from './templates/Home'
import About from './templates/About'
// import { Switch, Route } from 'react-router-dom'
import {Switch, Route, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
