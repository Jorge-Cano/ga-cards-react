import React from 'react';
import ReactDOM from 'react-dom';
import AddNewCard from './AddNewCard';
import NotFound from './NotFound';
import Home from './Home';
import About from './About';
import App from './App';
import './index.css';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="AddNewCard" component={AddNewCard} />
      <Route path="About" component={About} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>,
  document.getElementById('root')
);
