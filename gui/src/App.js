import React from 'react';

import './App.less'
import CustomLayout from './containers/Layout';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <CustomLayout>
        <Navbar />
      </CustomLayout>
    </div>
  );
}

export default App;
