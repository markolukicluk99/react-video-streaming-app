import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Homepage from './pages/homepage';
import Navigation from './components/Navigation'

import "./App.scss"

function App() {
  return (
    <Router>
    <div className="App">
      <Navigation />
      <Route exact path="/" render={ () => <Redirect to="/homepage" /> }/>
      <Route path="/homepage" component={Homepage} />
      {/* <Route path="/streaming" component={StreamingPage} /> */}
    </div>
    </Router>
  );
}

export default App;
