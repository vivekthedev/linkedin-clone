import React from "react";
import "./App.css";
import EmailList from "./EmailList";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Mail from "./Mail";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <div className='app__body'>
          <Sidebar />
          <Switch>
            <Route path='/mail'>
              <Mail />
            </Route>
            <Route path='/'>
              <EmailList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
