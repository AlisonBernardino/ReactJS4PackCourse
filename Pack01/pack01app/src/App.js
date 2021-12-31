// App.js file using hooks
import React from 'react';
import VirtualAmbient from './containers/VirtualAmbientWithoutHooks';
import DataEnvironment from './containers/DataEnvironment';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';

// Using React Hooks - We delete 
// the "class" and use the "function"
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/repos/:owner/:name" component={VirtualAmbient} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
