import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actions/auth';

import './App.less';
import CustomLayout from './containers/Layout';
import Navbar from './components/Navbar';

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <div className="App">
        <CustomLayout {...this.props}>
          <Navbar />
        </CustomLayout>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.token !== null, // if token is null isAuthenticated = False if token not null isAuthenticated = True
});

const mapDispatchToProps = (dispatch) => ({
  onTryAutoSignup: () => dispatch(actions.authCheckState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
