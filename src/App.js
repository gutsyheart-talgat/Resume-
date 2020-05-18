import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Resume from './components/Resume';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" component={About} exact/>
          <Route path="/resume" component={Resume} exact/>
          <Route path="/portfolio" component={Portfolio} exact/>
          <Route path="/contacts" component={Contacts} exact/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
