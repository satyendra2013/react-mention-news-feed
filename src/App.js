import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Feed from './components/Feed';

function App() {
  return (
    <Router>
      <Fragment>
        <div className='main'>
          <Route exact path='/' component={Feed} />
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
