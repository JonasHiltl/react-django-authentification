import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import './App.less';
import CheckAuthenticated from './containers/checkAuthenticated'
import CustomLayout from './containers/Layout';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NormalLoginForm from './pages/Login';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import ResetPasswordConfirm from './pages/ResetPasswordConfirm';
import Activate from './pages/Activate'

import store from './store/store';


const App = () => (
  <Provider store={store}>
    <Router>
      <div className='App'>
        <CheckAuthenticated>
          <Switch>
            <Route path='/login' exact component={NormalLoginForm} />
            <Route path='/signup' exact component={SignUp} />
            <Route path='/reset_password' exact component={ResetPassword} />
            <Route path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
            <Route path='/activate/:uid/token' component={Activate} />
            <CustomLayout>
              <Navbar />
                <Route path='/' exact component={Home} />
                <Route path='/profile' exact component={Profile} />
            </CustomLayout>
          </Switch>
        </CheckAuthenticated>
      </div>
    </Router>
  </Provider>
);

export default App;