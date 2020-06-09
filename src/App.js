import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Resume from './components/Resume';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import ContactList from './components/Portfolio/ContactList';
import verstka from './components/Portfolio/Verstka';




function App() {
  return (
    <BrowserRouter>
        <Switch className="container" basename="/Resume-">
          <Route path="/" component={About} exact/>
          <Route path="/resume" component={Resume} exact/>
          <Route path="/portfolio" component={Portfolio} exact/>
          <Route path="/contacts" component={Contacts} exact/>
          <Route path="/portfolio/contact-list" component={ContactList} exact/>
          <Route path="/portfolio/Web-page-layout" component={verstka} exact/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
