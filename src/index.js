import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignIn from './Pages/Auth/SignIn';
import Dashboard from './Pages/Dashboard';
import Details from './Pages/Details';
import Akomodasi from './Pages/Akomodasi';
import ListWisata from './Pages/ListWisata';
import Profile from './Pages/Profile';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Section from './Components/routing/Section';

ReactDOM.render(
  <React.StrictMode>
   <Router>
     <div>
     <SignIn /> 
     <Section />
     </div>   
   </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
