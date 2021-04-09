import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
//Pages
import Homepage from './pages/homepage';
import Search from './pages/search';
import MovieDetail from './pages/moviedetail'
import Streaming from './pages/streaming'
//Components
import Navigation from './components/Navigation';

import "./App.scss"

function App() {
  return (
    <Router>

    <div className="App">
      <Navigation />
      <Route exact path="/" render={ () => <Redirect to="/homepage" /> }/>
      <Route path="/homepage" component={Homepage} />
      <Route path="/detail/:type/:id" component={MovieDetail} />
      <Route path="/streaming" component={Streaming} />
      <Route path="/search/:value" component={Search} />
    </div>
    </Router>
  );
}

export default App;
