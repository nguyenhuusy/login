import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Pages/Login';
import SignUp from './Components/Pages/SignUp';
import HomePage from './Components/Pages/HomePage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          {/* <Route path="/signin" component={Login} /> */}
          <Route path="/signup" component={SignUp} />
          <Route path="/homepage" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
