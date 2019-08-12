import React from 'react';
import './App.css';
import Nav from './Nav/Nav';
import MapPage from './MapPage/MapPage';
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Router>
        <div>
          <Route path="/" component={MapPage} />
        </div>
      </Router>
    </div>
  );
}

export default App;
