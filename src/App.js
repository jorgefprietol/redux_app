import React from 'react';
import './App.css';
import Botonera from './component/botonera/Botonera';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './component/home/Home';
import Form from './component/form/Form';
import List from './component/list/List';

function App() {
  return (
    <div className="App">
      <Botonera/>
      <Router>
          <Route path='/home' component={Home} />
          <Route path='/list' component={List} />
          <Route path='/new' component={Form} />
      </Router>
    </div>
  );
}

export default App;
