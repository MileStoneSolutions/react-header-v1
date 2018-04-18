import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout';

class App extends Component {

  state={
    appName:'Shoping cart',
    author:'react - Aniket Jha'
  }
  render() {
    return (
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
  }
}

export default App;
