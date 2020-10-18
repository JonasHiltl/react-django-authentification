import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as actions from './store/actions/auth';

import './App.less';
import CustomLayout from './containers/Layout';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NormalLoginForm from "./pages/Login";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import ResetPasswordConfirm from "./pages/ResetPasswordConfirm";
import Activate from "./pages/Activate"



const App = () => (
  <Router>
    <div className="App">
      <CustomLayout>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </CustomLayout>
      <Route path="/login" component={NormalLoginForm} />
      <Route path="/signup" component={SignUp} />
      <Route path="/reset_password" component={ResetPassword} />
      <Route path="/password/reset/confirm/:uid/:token" component={ResetPasswordConfirm} />
      <Route path="/activate/:uid/token" component={Activate} />
    </div>
  </Router>
);

export default App;